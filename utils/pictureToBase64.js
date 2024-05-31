const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
exports.pictureToBase64 = (str) => {

    // 使用Cheerio加载HTML内容
    const $ = cheerio.load(str);

    // 使用选择器定位包含图片的HTML标签
    const imageTags = $('img');

    // 遍历每个包含图片的标签
    imageTags.each(async (index, element) => {
        const imageUrl = $(element).attr('src'); // 获取图片路径

        // 读取图片文件内容
        const imagePath = path.resolve('origin', imageUrl);
        const imageData = fs.readFileSync(imagePath);

        // 将图片内容转换为Base64编码
        const base64Data = Buffer.from(imageData).toString('base64');
        const base64ImageUrl = `data:image/png;base64,${base64Data}`;

        // 替换HTML中的图片路径为Base64编码的数据
        $(element).attr('src', base64ImageUrl);
    });

    return $.html()
}