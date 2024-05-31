const fs = require('fs');
const { removeComments } = require('./utils/removeComments.js');
const { insertScriptContent } = require('./utils/insertScriptContent.js');
const { insertStyleContent } = require('./utils/insertStyleContent.js');
const { pictureToBase64 } = require('./utils/pictureToBase64.js');

// 读取index.html文件内容
fs.readFile('./origin/index.html', 'utf8', (err, data) => {

    if (err) {
        console.error('读取文件出错:', err);
        return;
    }

    // 去除HTML注释代码
    const data1 = removeComments(data);

    // 匹配并替换 script 标签中的文件路径
    const data2 = insertScriptContent(data1)

    // 匹配并替换 style 标签中的文件路径
    const data3 = insertStyleContent(data2)

    // 匹配图片标签中的文件路径，转成base64
   const data4 = pictureToBase64(data3);

    // 将处理后的内容写入新的index.html文件
    fs.writeFile('index.html', data4, 'utf8', (err) => {
        if (err) {
            console.error('写入文件出错:', err);
            return;
        }
        console.log('新的index.html文件已生成');
    });
});