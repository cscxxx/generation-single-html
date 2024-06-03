> 文件层级与文件说明
```
└── generation-single-html  项目根路径
    ├── index.html 打包后生成的单文件html（未压缩）
    ├── index.js 使用node生成单文件的入口文件
    ├── mini.html 打包后生成的单文件html(已压缩)
    ├── origin 原代码文件夹，包含项目的原始代码和静态资源
    │   ├── css
    │   │   └── index.css
    │   ├── images
    │   │   └── M3-3.base_gc.png
    │   ├── index.html
    │   ├── index.js
    │   ├── js
    │   │   ├── js1.js
    │   │   └── js2.js
    │   ├── static
    │   │   └── css
    │   │       └── font-awesome
    │   │           └── css
    │   │               ├── font-awesome.css
    │   │               ├── font-awesome.min.css
    │   │               └── fonts
    │   │                   ├── FontAwesome.otf
    │   │                   ├── fontawesome-webfont.eot
    │   │                   ├── fontawesome-webfont.svg
    │   │                   ├── fontawesome-webfont.ttf
    │   │                   ├── fontawesome-webfont.woff
    │   │                   └── fontawesome-webfont.woff2
    │   └── style.css
    ├── package.json 项目依赖的配置文件
    ├── README.md 项目说明文档
    └── utils 工具文件夹，包含项目使用的工具和脚本
        ├── compressHtml.js 压缩html的脚本
        ├── insertScriptContent.js 插入js的脚本
        ├── insertStyleContent.js 插入样式的脚本
        ├── pictureToBase64.js 图片转base64的脚本
        ├── removeComments.js 移除注释的脚本
        └── styleFontImgToBase64.js 样式文件中的图片字体转base64的脚本
```
> 需要Node.js环境
- 安装Node.js
  - Node.js 官方网站（https://nodejs.org）
  - 选择LTS 版本（长期支持版）
  - 在安装过程中，默认会将 Node.js 和 npm（Node.js 包管理器）一同安装。确保选中相关选项并完成安装。
  - 查看是否安装成功
  ```
  node -v
  npm -v
  ```
- 安装依赖
  ```
   npm install
  ```
- 查看源代码的页面
```
  - npm run view-origin-html
```
- 打包源代码成单文件html
```
  - node index.js
```
- 查看打包后的页面
```
  - npm run view-single-html
```