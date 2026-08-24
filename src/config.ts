import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "pgntgz的小站",
	subtitle: "一个中转&空间&私货的杂烩",
	description: "构建于 Fuwari 的一个杂食向博客。\n可能包括 GNU/linux，AOSP root，小项目中转等。",
	lang: "zh_CN", // Language code, e.g. "en", "zh_CN", "ja", etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "/assets/desktop-banner/osu1.webp", // Relative to the /src directory. Relative to the /public directory if it starts with "/"
		position: "center", // Equivalent to object-position, only supports "top", "center", "bottom". "center" by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		{
			src: "/favicon/favicon-48.png",
			sizes: "48x48",
		},
		{
			src: "/favicon/favicon-96.png",
			sizes: "96x96",
		},
		{
			src: "/favicon/favicon-192.png",
			sizes: "192x192",
		},
		{
			src: "/favicon.ico",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "日记",
			url: "/diary/",
			icon: "material-symbols:edit-note-outline-rounded",
		},
		LinkPreset.About,
		{
			name: "PJSK贴纸",
			url: "https://pjsk.pgntgz.org/pjsk/",
			external: true,
			icon: "material-symbols:sentiment-satisfied-outline-rounded",
		},
		{
			name: "GitHub仓库",
			url: "https://github.com/pgntgz",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.webp", // Relative to the /src directory. Relative to the /public directory if it starts with "/"
	name: "pgntgz",
	bio: " 创造是人类的天性 ",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/pgntgz",
		},
		{
			name: "Discord",
			icon: "fa6-brands:discord",
			url: "https://discord.com/users/1293906307232825497",
		},
		{
			name: "Matrix",
			icon: "simple-icons:matrix",
			url:"https://matrix.to/#/@pgntgz:tchncs.de",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
