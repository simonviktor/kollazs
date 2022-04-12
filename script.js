var termek1 = 26000
var termek2 = 56000
var termek3 = 56200


function kosarba(termek) {
    db = Number(prompt('DB?'))
    localStorage.setItem(termek, db)
}

function torles(termek) {
    localStorage.clear()
}

function kosar() {
    var lista = ""
    var term = localStorage.key(1)
    lista += "<tr> <th>név</th> <th>darab</th> <th>ár</th> </tr>"
    lista += "<tr> <th>"+term+"</th> <th>1</th> <th>26000</th> </tr>"

    document.getElementById('table').innerHTML=lista
}