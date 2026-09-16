# qiuyaodawo.github.io

## 文件

- `index.html`：个人介绍、项目和文章链接。
- `style.css`：排版与手机适配。
- `texture.js`：每次加载为标题生成独立的静态 SVG 纹理，调整 `scale` 可改变扰动强度，当前为 `1.3`。
- `.nojekyll`：让 GitHub Pages 跳过 Jekyll 构建。

## 预览

直接用浏览器打开 `index.html` 即可。

如果已经安装 Python，也可以在仓库目录运行 `python -m http.server 8000 --bind 127.0.0.1`，然后访问 <http://localhost:8000>。HTTP 预览是可选的。

## 编辑

修改 `index.html` 中的内容即可。在 Projects 或 Writing 下添加真实链接；新增文章可以创建独立 HTML 文件，并引用 `style.css`。

## 发布

将改动合入并推送到 `master` 后，在 GitHub 仓库的 Settings → Pages 中选择 Deploy from a branch，分支选择 `master`，目录选择 `/(root)`。

本地改动不会自动更新线上网站。远程 Pages 设置需要单独配置。
