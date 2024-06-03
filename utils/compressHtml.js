const fs = require('fs');
const minify = require('html-minifier').minify;

exports.compressHtml = function (str) {

    // 配置压缩选项
    const options = {
        collapseWhitespace: true,                 // 去除空格和换行符
        removeComments: true,                     // 去除注释
        removeRedundantAttributes: true,           // 去除多余的属性
        removeEmptyAttributes: true,               // 去除空的属性
        removeScriptTypeAttributes: true,          // 去除 script 标签的 type 属性
        removeStyleLinkTypeAttributes: true,       // 去除 style 和 link 标签的 type 属性
        minifyJS: true,                           // 压缩内联的 JavaScript
        minifyCSS: true,                          // 压缩内联的 CSS
        minifyURLs: true,                         // 压缩链接的 URL
        removeAttributeQuotes: true,               // 去除属性值周围的引号
        removeOptionalTags: true,                  // 去除可选的闭合标签
        // removeEmptyElements: true                  // 去除空的元素 //使用后图标失效
    };

    // 压缩 HTML
    const outputHtml = minify(str, options);

    // 写入压缩后的 HTML 文件
    const outputFile = 'mini.html';
    fs.writeFileSync(outputFile, outputHtml, 'utf8');

    console.log('HTML 文件已成功压缩并保存为 mini.html');

}

