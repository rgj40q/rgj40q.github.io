function button_onclick() {
    var text, result, parser, error, ast;
    text = document.getElementById("text").value;
//  var response = fetch("grammar.pegjs");
//  var grammar = response.text;
//  parser = peg.generate(grammar);
    try {
        ast = parser.parse(text);
        result = "Success! " + ast2html(ast);
    } catch(error) {
        result = "Parsing error: " + error;
    }
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
