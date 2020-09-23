function ast2html(ast) {
    var result = "";
    if (ast.name) {
        result += "<ul><li>" + ast.name + "</li>";
    }
    if (ast.children) {
        for (const element of ast.children) {
            if (element) {
                result += ast2html(element);
            }
        }
    }
    if (ast.name) {
        result += "</ul>";
    }
    return result;
}

function button_onclick() {
    var parser, ast, result, error;
    fetch("grammar.pegjs").then(response => response.text()).then(grammar => {
        parser = peg.generate(grammar);
        try {
            ast = parser.parse(document.getElementById("textarea").value);
            result = "Parsed successfully: " + ast2html(ast);
        } catch(error) {
            result = "Parsing error: " + error.message;
        }
        document.getElementById("result").innerHTML = result;
    });
}
