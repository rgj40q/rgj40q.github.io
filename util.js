function button_onclick() {
    var result, parser, ast, error;
    fetch("grammar.pegjs").then(response => response.text()).then(grammar => {
        parser = peg.generate(grammar);
        try {
            ast = parser.parse(document.getElementById("text").value);
            console.log(ast);
            result = "Parsed successfully: " + ast2html(ast);
        } catch(error) {
            result = "Parsing error: "error.message;
        }
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
