"use strict";

function button_onclick() {
    var response, grammar, text, result, parser, error, ast, ok;
    response = fetch("grammar.pegjs");
    grammar = response.text;
    text = document.getElementById("text").value;
    ok = 1;
    try {
        parser = peg.generate(grammar);
    } catch(error) {
        result = "Grammar error: " + error;
        ok = 0;
    }
    if (ok) {
        try {
            ast = parser.parse(text);
            result = "Success! " + ast2html(ast);
        } catch(error) {
            result = "Parsing error: " + error;
        }
    }
    document.getElementById("result").innerHTML = result;
}

function ast2html(ast) {
    var result = "<ul>";
    result += "<li>" + ast.name + "</li>";
    for (const element of ast.children) {
        result += ast2html(element);
    }
    result += "</ul>";
    return result;
}
