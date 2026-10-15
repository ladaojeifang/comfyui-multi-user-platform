# Comfy Space 宣传主页

Astro 静态站点，介绍 ComfyUI 多用户平台的浏览器工作台、中心队列、GPU Worker 和独占直接操作。它与正式应用分开运行，不连接数据库，也不包含安装包或开发凭证。
https://ladaojeifang.github.io/comfyui-multi-user-platform  
## 本地预览

在 `site` 目录运行：

```powershell
npm ci
npm run dev
```

打开 `http://localhost:4321/`。构建验收：

```powershell
npm run build
npm run check:output
```

## 发布到 GitHub Pages

1. 只将 `site/` 中的文件推送到宣传主页专用的公开 GitHub 仓库 `main` 分支，避免把平台服务端与安装脚本一并公开。若使用其他默认分支，先修改 `.github/workflows/pages.yml` 的分支过滤。
2. 仓库 **Settings → Pages → Build and deployment** 中将 Source 设为 **GitHub Actions**。
3. 推送主页文件，或手动运行 **Marketing site · GitHub Pages** 工作流。
4. 项目仓库默认发布于 `https://<owner>.github.io/<repo>/`。用户名仓库 `<owner>.github.io` 默认发布于域名根路径。`astro.config.mjs` 从 `GITHUB_REPOSITORY` 自动计算地址与子路径。

若使用自定义域名，在构建环境设置 `SITE_URL` 和 `SITE_BASE`，并按 GitHub Pages 的域名设置配置 DNS。仓库按钮使用 `PUBLIC_REPOSITORY_URL`；Pages 工作流会自动填入当前仓库地址。

首页将平台标注为 **0.6.1 候选版**，不会把未完成的正式 HTTPS、全新机器和跨机现场验收说成已通过。发布文案应随正式版本更新。
