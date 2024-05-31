> 文件层级与文件说明
- .vscode
  - settings.json: VSCode的配置文件，包含代码编辑器的设置和选项
  - launch.json: VSCode的调试配置文件，包含调试的相关设置和选项
- origin: 原始代码文件夹，包含项目的原始代码
- utils: 工具文件夹，包含项目使用的工具和脚本
- index.html: 打包后生成的单文件html
- index.js 使用node生成单文件的入口文件
- package.json: 项目依赖的配置文件
- README.md: 项目说明文档

> 需要Node.js环境
- 安装Node.js
- 安装依赖
  - npm install
- 查看源代码的页面
  - npm run view-origin-html
- 打包源代码成单文件html
  - node index.js
- 查看打包后的页面
  - npm run view-single-html