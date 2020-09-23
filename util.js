function ast2html(ast) {
    var result = "";
    if (Array.isArray(ast)) {
        if (ast) {
            for (const element of ast) {
                if (element) {
                    result += ast2html(element);
                }
            }
        }
    } else {
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
    }
    return result;
}

function buildErrorMessage(e) {
    return e.location !== undefined
      ? "Line " + e.location.start.line + ", column " + e.location.start.column + ": " + e.message
      : e.message;
  }

function button_onclick() {
    var parser, ast, result, error;
    fetch("grammar.pegjs").then(response => response.text()).then(grammar => {
        parser = peg.generate(grammar);
        try {
            ast = parser.parse(document.getElementById("textarea").value);
            result = "Parsed successfully: " + ast2html(ast);
        } catch(error) {
            result = "Parsing error: " + buildErrorMessage(error);
        }
        document.getElementById("result").innerHTML = result;
    });
}
