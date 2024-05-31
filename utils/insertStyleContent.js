const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const { styleFontImgToBase64 } = require('./styleFontImgToBase64');

exports.insertStyleContent = (str) => {

    // 使用cheerio加载HTML内容
    const $ = cheerio.load(str);

    // 获取所有的<link>标签
    const linkTags = $('link');

    // 过滤包含rel="stylesheet"的<link>标签
    const stylesheetLinks = linkTags.filter((index, element) => {
        const rel = $(element).attr('rel');
        return rel && rel.toLowerCase() === 'stylesheet';
    });

    // 遍历每个<link>标签
    stylesheetLinks.each((index, element) => {
        const href = $(element).attr('href');
        if (href) {
            const filePath = path.resolve('origin', href);
            // 读取样式文件内容
            const styleContent = fs.readFileSync(filePath, 'utf-8');
            
            // 将样式文件中字体、图片替换成base64编码
            const newStyleContent= styleFontImgToBase64(styleContent, filePath)

            // 创建新的<style>标签，并将样式源码替换掉<link>标签
            // const styleTag = $('<style>').html(styleContent);
            const styleTag = $('<style>').html(newStyleContent);
            $(element).replaceWith(styleTag);
        }
    });

    return $.html();
}