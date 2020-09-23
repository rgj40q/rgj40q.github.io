function button_onclick() {
    var result, parser, ast;
    fetch("grammar.pegjs").then(response => response.text()).then(grammar => {
        parser = peg.generate(grammar);
        document.getElementById("btn").onclick = error => {
            try {
                ast = parser.parse(document.getElementById("text").value);
                result = ast2html(ast);
            } catch(error) {
                result = error.message;
            }
        };
    });
    document.getElementById("result").innerHTML = result;
}

function ast2html(ast) {
    var result = "<ul>";
    result += "<li>" + ast.name + "</li>";
    for (const element of ast.children) {
        if (element) {
            result += ast2html(element);
        }
    }
    result += "</ul>";
    return result;
}
