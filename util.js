

function ast2html(ast) {
    var i, result = ''
    if (Object.prototype.toString.call(ast) === '[object Array]') {
        if (ast) {
            for (i = 0; i < ast.length; i++) {
                if (ast[i]) {
                    result += ast2html(ast[i])
                }
            }
        }
    } else {
        if (ast.name) {
            result += '<ul style="list-style-type:none;'
                + 'padding-left:1em"><li>' + ast.name + '</li>'
        }
        if (ast.children) {
            for (i = 0; i < ast.children.length; i++) {
                if (ast.children[i]) {
                    result += ast2html(ast.children[i])
                }
            }
        }
        if (ast.name) {
            result += '</ul>'
        }
    }
    return result
}


function buildErrorMessage(e) {
    if (e.location !== undefined) {
        return 'line ' + e.location.start.line + ', column '
            + e.location.start.column + ': ' + e.message
    }
    // else
    return e.message
}


function buttonOnclick() {
    var parser, ast, result, error
    parser = peg.generate(document.getElementById('grammar').innerHTML)
    try {
        ast = parser.parse(document.getElementById('textarea').value)
        result = 'Parsed successfully: ' + ast2html(ast)
    } catch(error) {
        result = 'Parsing error: ' + buildErrorMessage(error)
    }
    document.getElementById('result').innerHTML = result
}


function parseStem(s) {
    var i, result = ''
    for (i = 0; i < dict.length; i++) {
        if (s == dict[i][0]) {
            result += dict[i][2] + ', ' + 'ULD#' + dict[i][1] + '; '
        }
    }
    if (result) {
        return result
    }
    // else
    return '-'
}

