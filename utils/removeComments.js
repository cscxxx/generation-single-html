
exports.removeComments = function (str) {
    // 移除html文件中的注释
    return str.replace(/<!--[\s\S]*?-->/g, '');
};