"use strict";

function button_onclick() {
    var response, grammar, text, result, parser, error, ast;
    response = await fetch("grammar.pegjs");
    if (response.ok) {
        grammar = await response.text();
        text = document.getElementById("text");
        try {
            parser = peg.generate(grammar);
        } catch(error) {
            result = "Grammar error: " + error;
        }
        try {
            ast = parser.parse(text);
            result = "Success! " + ast2html(ast);
        } catch(error) {
            result = "Parsing error: " + error;
        }
    } else {
        result = "HTTP error: " + response.status;
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
