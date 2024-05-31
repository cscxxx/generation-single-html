const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

// 获取字符串中 <script></script>标签的src的文件路径，并获取文件内容，以<script>src路径中源码</script>标签的形式插入到字符串中
exports.insertScriptContent = (str) => {

    // 使用Cheerio加载HTML
    const $ = cheerio.load(str);

    // 获取带有type="text/javascript"的script标签
    $('script[type="text/javascript"]').each((index, element) => {
        const scriptPath = $(element).attr('src'); // 获取script标签的src属性值

        if (scriptPath) {
            const absPath = path.resolve('origin', scriptPath);
            // 读取文件内容
            const fileContent = fs.readFileSync(absPath, 'utf8');

            // 使用<script>标签包裹文件内容
            const scriptTag = `<script>${fileContent}</script>`;

            // 替换原始的script标签
            $(element).replaceWith(scriptTag);
        }
    });

    // 打印修改后的HTML内容
    // console.log($.html());
    return $.html();
}

