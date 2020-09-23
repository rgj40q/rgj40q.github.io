fetch("grammar.pegjs").then(response => response.text()).then(grammar => {
    let parser = peg.generate(grammar);
    document.getElementById("btn").onclick = error => {
        try {
            let ast = parser.parse(document.getElementById("text").value);
            console.log(ast);
            document.getElementById("result").innerHTML = "Parsed successfully: " + ast2html(ast);
        } catch(error) {
            document.getElementById("result").innerHTML = "Parsing error: " + error.message;
        }
    };
});

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
