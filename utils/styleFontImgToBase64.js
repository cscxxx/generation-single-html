const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

exports.styleFontImgToBase64 = (str, cssAbsfilePath) => {

    // 正则表达式匹配样式中的图片、字体等文件路径
    const urlRegex = /url\(['"]?(.*?)['"]?\)/g;
    let match;
    while ((match = urlRegex.exec(str)) !== null) {
        const fileUrl = match[1]; // 获取文件路径

        // 读取文件内容 // origin\static\css\font-awesome\css\fonts
        const filePath = path.resolve(cssAbsfilePath, fileUrl);
        // 解析文件路径，并获取不包含查询参数的路径部分
        const parsedUrl = new URL(filePath);
        const filePathWithoutQuery = path.resolve(parsedUrl.pathname);
        const fileData = fs.readFileSync(filePathWithoutQuery);

        // 将文件内容转换为Base64编码
        const base64Data = fileData.toString('base64');
        const base64FileUrl = `data:${getMimeType(filePathWithoutQuery)};base64,${base64Data}`;

        // 替换样式中的文件路径为Base64编码的数据
        str = str.replace(match[0], `url(${base64FileUrl})`);
    }
    return str;
}

// 根据文件路径获取MIME类型
function getMimeType(filePath) {
    const extname = path.extname(filePath);
    if (extname === '.png') {
        return 'image/png';
    } else if (extname === '.jpg' || extname === '.jpeg') {
        return 'image/jpeg';
    } else if (extname === '.gif') {
        return 'image/gif';
    } else if (extname === '.svg') {
        return 'image/svg+xml';
    } else if (extname === '.woff') {
        return 'application/font-woff';
    } else if (extname === '.woff2') {
        return 'font/woff2';
    } else if (extname === '.ttf') {
        return 'application/font-sfnt';
    } else if (extname === '.eot') {
        return 'application/vnd.ms-fontobject';
    }
    // 添加其他文件类型的MIME类型映射
}