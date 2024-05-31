const fs = require('fs');
const path = require('path');

// 获取字符串中 <script></script>标签的src的文件路径，并获取文件内容，以<script>src路径中源码</script>标签的形式插入到字符串中
exports.insertScriptContent = (str) => {

    const scriptRegex = /<script.*?src=['"](.*?)['"].*?>.*?<\/script>/g;
    const scripts = str.match(scriptRegex);

    if (scripts) {
        scripts.forEach(script => {
            const srcRegex = /<script.*?src=['"](.*?)['"].*?>.*?<\/script>/;
            const srcMatch = srcRegex.exec(script);
            if (srcMatch && srcMatch[1]) {
                const filePath = path.resolve('origin', srcMatch[1]);
                if (fs.existsSync(filePath)) {
                    const fileContent = fs.readFileSync(filePath, 'utf8');
                    const scriptContent = `<script>${fileContent}</script>`;
                    str = str.replace(script, scriptContent);
                }
            }
        });
    }
    // 使用正则表达式删除注释
    // return str.replace(/\/\/.*|\/\*[\s\S]*\*\//g, '');
    return str;
}

