---
title: 自己的移植的几个机械动力扩展-26.2+NeoForge版本
published: 2026-11-24
draft: false
description: 出于联机但是又不想玩旧版本的目的，自己移植了火炮学（Create Big Cannons）相关的几个机械动力的扩展到Minecraft26.2+NeoForge，自己玩下来没有太大问题。虽然我不打算长期维护，但是考虑到不想大家都造轮子干脆发布出来。
category: 技术
tags:
  - bypgntgz
  - Minecraft
  - 短篇
  - 水
image: https://box.pgntgz.org/posts/mc/mcfm.webp
---
[直接跳转到发布](https://pgntgz.org/posts/mc/#%E5%8F%91%E5%B8%83)
## 简单概述
简单来说机械动力(Create)的开发组因为精力问题维护的版本只有1.20.1和1.21.1
现代的Minecraft版本中移植工作是玩家社区自发完成的，其中NeoForge的维护者是[BugsGify](https://www.curseforge.com/members/bugsgify/projects) 但是因为精力问题他所维护的附属模组只有 柴油动力（Diesel Generators） 太空探索（Ad Astra）等几个。
<img src="https://box.pgntgz.org/posts/mc/Pasted%20image%2020261124050147.webp" alt="Pasted image 20261124050147.png" style="width: 40%; height: auto; display: block; margin: 0 auto;" />
<center>*他的主页*</center>

但我自己很想火炮学（Create Big Cannons）热力学（Thermodynamica）这几个扩展mod。因为我就利用多余的额度vibe coding做了这些mod的**Minecraft26.2+NeoForge适配**。我本身的目的是为了帮忙建服务器，所以也顺便移植了一些其他多人的有趣的mod（toneko 和 JustARod BTW，他们有点轻微的NSFW）。
<img src="https://box.pgntgz.org/posts/mc/mcfm.webp" alt="mcfm.png" style="width: 70%; height: auto; display: block; margin: 0 auto;" />
<center>*示意图*</center>
值得注意的我自己的几轮debug，直到这个版本**我游玩中他们都是可用状态**，没有让我值得注意的重大bug。但我并不能保证这些mod 100%的完成，也不能保证长期的维护他们，选择公开只是因为移植的过程挺复杂的说实话所以我不想让别人再重新造轮子。而且因为我实在没有精力移植庞大的瓦尔基里（Valkyrien Skies），所以我只能选择把**相关的内容阉割掉了**，所以他们可能并不完整。

## 发布
源代码方面因为太杂了所以我没有放在我的github主页，我建立了一个统一的组织把他们发布在了那里[源码地址](https://github.com/orgs/pgntgz-mod-26-2/repositories)

我的服务器的整合包也顺便弄了一份发布在这里，这里边包含了其他常用mod，如果你考虑直接打开游玩的话可以直接下载整合包。

[Google 硬碟](https://drive.google.com/file/d/1FkwLoiWZIldQYVU1oSTqzzTGBXA-dULm/view?usp=drive_link)

[R2直链获取](https://box.pgntgz.org/MC26.2-NeoForge-Modpack-Public.zip)

小成本博客，R2直链不保证未来服务仍然可用,获取的话请优先使用Google硬碟的版本。

⚠️值得注意的是由于 机械动力(Create) 星系（Ad Astra） 坦克扩展（CAT）都是**仅开放源代码不开放图形资产**，所以在**公开发布的整合包中我必须去除这些资产**。 这些模组可以正常在服务端使用，但是在客户端中运行会出现**相关资源没有图形资产是紫黑方块**的情况，他们需要你自行获取，面会给出详细教程。

同时值得注意的是这份整合包中CC BY-NC-SA 4.0发布的内容我并没有清除，所以**整个整合包只允许免费或者只收回成本的分发**。

如果确实觉得配置太麻烦搞不懂想要获取直接可用的整合包。或者想一起玩服务器的话可以通过博客公开的联系方式私下联络我。


> **1. 机械动力（Create）图形资产**
> 
> - **下载地址**：
>     - Modrinth 版本页：[https://modrinth.com/mod/create/version/UjX6dr61](https://modrinth.com/mod/create/version/UjX6dr61)
>     - 文件直链（`create-1.21.1-6.0.10.jar`，约 18.2 MB）：[https://cdn.modrinth.com/data/LNytGWDc/versions/UjX6dr61/create-1.21.1-6.0.10.jar](https://cdn.modrinth.com/data/LNytGWDc/versions/UjX6dr61/create-1.21.1-6.0.10.jar)
> - **放置路径**（没有文件夹就手动新建）：
>     
>     .minecraft/config/create-adapted/external-assets/create-1.21.1-6.0.10.jar
>     
> 
> **2. 星系（Ad Astra）图形资产**
> 
> - **下载地址**：
>     - Modrinth 版本页：[https://modrinth.com/mod/ad-astra/version/P6UKrUtG](https://modrinth.com/mod/ad-astra/version/P6UKrUtG)
>     - 文件直链（`adastra-1.21.1-1.16.24-neoforge.jar`，约 7.0 MB）：[https://cdn.modrinth.com/data/3ufwT9JF/versions/P6UKrUtG/adastra-1.21.1-1.16.24-neoforge.jar](https://cdn.modrinth.com/data/3ufwT9JF/versions/P6UKrUtG/adastra-1.21.1-1.16.24-neoforge.jar)
> - **放置路径**（没有文件夹就手动新建）：
>     
>     text
>     
>     .minecraft/config/ad-astra-adapted/external-assets/adastra-1.21.1-1.16.24-neoforge.jar
>     
> - **非 PrismLauncher 补充：
>     - `Ad Astra` 需要读取原版 `1.21.1` 的双层刷怪蛋贴图。如果你和我一样用PrismLauncher 它会自动识别本地库，**如果你用的是 HMCL /  FCL 等其他启动器**，请将自己游戏库里的 **Minecraft `1.21.1` 原版客户端 `.jar`**（通常在 `.minecraft/versions/1.21.1/1.21.1.jar`）也复制一份放进同一个目录：
>         
>         text
>         
>         .minecraft/config/ad-astra-adapted/external-assets/1.21.1.jar
>         
> 
> **3. 机械动力：坦克附属（Create: Tank Additions / CTA）图形资产**
> 
> - **下载地址**：
>     - Modrinth 版本页：[https://modrinth.com/mod/cta/version/1balzXdI](https://modrinth.com/mod/cta/version/1balzXdI)
>     - 文件直链（`cta-0.5.5.jar`，约 515 KB）：[https://cdn.modrinth.com/data/TjHjJNQC/versions/1balzXdI/cta-0.5.5.jar](https://cdn.modrinth.com/data/TjHjJNQC/versions/1balzXdI/cta-0.5.5.jar)
> - **放置路径**：
>     
>     text
>     
>     .minecraft/resourcepacks/cta-0.5.5.jar
>     
> - **启用方法**：进游戏 →\rightarrow→ **选项** →\rightarrow→ **资源包**，把 `cta-0.5.5.jar` 移到右侧“已选”列表（如果弹出“为旧版本制作”的红色提示，直接点**“是”强制启用**即可）。


顺便放一份这次移植的所有mod的列表，BTW整合包中的`Create: Adapted` + `Create Diesel Generators: Adapted`原本有JEI崩溃问题，我进行了一些小修补，如果你玩原版与其搭配的话可能会有这个问题，或者他们的上游可能也修复了我也不知道

| 序号  | 命名                                                    | 代码开放协议 |          图形资产开放协议           | 原版链接                                                                  |
| :-: | :---------------------------------------------------- | :----: | :-------------------------: | :-------------------------------------------------------------------- |
|  1  | 瑞奇的弹射物前置库（Ritchie's Projectile Library）               |  MIT   |             MIT             | https://github.com/Wagers-of-Industrial-Warfare/RitchiesProjectileLib |
|  2  | 机械动力：大炮（Create Big Cannons）                           |  MIT   |       CC BY-NC-SA 4.0       | https://github.com/Cannoneers-of-Create/CreateBigCannons              |
|  3  | 热力学前置（Thermodynamica）                                 |  MIT   |             MIT             | https://github.com/VS-vehicular-additions/thermodynamica              |
|  4  | 机械动力大炮：弹道进阶（Create Big Cannons: Going Ballistic）      |  MIT   |             MIT             | https://github.com/Hectoris919/CreateBigCannons-Going-Ballistic       |
|  5  | 机械动力弹道火控（Create Big Cannons: Fire Control Ballistics） | GPLv3  |            GPLv3            | https://github.com/cangwuxiaoqi/create-ballistics-fire-control        |
|  6  | 机械动力：坦克扩展（Create Tank Additions）                      | GPLv3  | All Rights Reserved（保留所有权利） | https://github.com/Tribulla/CTA                                       |
|  7  | 成为猫娘（toNeko）                                          | GPLv3  |            GPLv3            | https://github.com/CSneko/toNeko                                      |
|  8  | 末地烛（JustARod）                                         | GPLv3  |            GPLv3            | https://github.com/CSneko/JustARod                                    |
