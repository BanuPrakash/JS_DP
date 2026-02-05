// on the lines of @babel/preset-env or @babel/preset-react

module.exports = function(babel) {
    const { types: t } = babel;
    return {
        name : "Sample Visitor",
        visitor: {
            Literal: function(path) {
                if(path.node.value !== "Hello") {
                    return
                }
                path.node.value = "Hi"
            },
            ImportDeclaration: function(path) {
                var filepath = path.node.source.value;
                if(filepath[0] !== "@") {
                    return;
                }
                filepath = filepath.substring(1)
                filepath = process.cwd() +"/lib/" + filepath;
                path.node.source.value = filepath;
            }
        }
    }
}