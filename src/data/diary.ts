import fs from "node:fs";
import path from "node:path";

export interface DiaryItem {
	id: number;
	date: string;
	content: string;
	images?: string[];
	tags?: string[];
}

export function loadDiaryData(): DiaryItem[] {
	const filePath = path.join(process.cwd(), "src/data/diary.txt");
	if (!fs.existsSync(filePath)) {
		return [];
	}

	const fileContent = fs.readFileSync(filePath, "utf8");
	const lines = fileContent.split("\n").filter((l) => l.trim().length > 0);
	const items: DiaryItem[] = [];

	let currentId = 1;
	for (const line of lines) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith("#")) continue;

		// 提取日期 (匹配 YYYY-MM-DD 或 YYYY-MM-DDTHH:mm 或 YYYY-MM-DD HH:mm)
		const dateMatch = trimmed.match(/^(\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2})?)\s+(.*)$/);
		if (dateMatch) {
			let dateStr = dateMatch[1].replace(" ", "T");
			if (dateStr.length === 10) dateStr += "T12:00";
			let rest = dateMatch[2];

			let images: string[] = [];
			// 提取 [images: url1,url2]
			const imgMatch = rest.match(/\[images:\s*([^\]]+)\]/);
			if (imgMatch) {
				images = imgMatch[1].split(",").map((s) => s.trim()).filter(Boolean);
				rest = rest.replace(imgMatch[0], "").trim();
			}

			// 也自动识别行内以 http 开头的独立图片链接
			const urlMatches = rest.match(/https?:\/\/[^\s]+\.(?:webp|png|jpg|jpeg|gif)/gi);
			if (urlMatches && images.length === 0) {
				// images.push(...urlMatches);
			}

			items.push({
				id: currentId++,
				date: dateStr,
				content: rest,
				images: images,
			});
		}
	}

	return items;
}

export const getDiaryList = (limit?: number): DiaryItem[] => {
	const data = loadDiaryData();
	const sorted = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	if (limit && limit > 0) return sorted.slice(0, limit);
	return sorted;
};

export const getDiaryStats = () => {
	const data = loadDiaryData();
	const total = data.length;
	const hasImages = data.filter((item) => item.images && item.images.length > 0).length;

	return {
		total,
		hasImages,
	};
};

export default loadDiaryData();
