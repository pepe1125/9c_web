var termek01 = 22890
var termek02 = 20000 
var termek03 = 7999
var termek04 = 21999
var termek05 = 21490
var termek06 = 9999 
var termek07 = 11890
var termek08 = 16000
var termek09 = 9000
var termek10 = 12999
var termek11 = 12999
var termek12 = 11890
var termek13 = 8990
var termek14 = 9999
var termek15 = 16999
var termek16 = 21500
var termek17 = 17490
var termek18 = 20100
var termek19 = 9990
var termek20 = 11000
//XBOX



function hozzaad(termek) {
    db = Number(prompt('Mennyit kérsz?'))
    localStorage.setItem(termek, db)
}

function torles() {
    localStorage.clear()
}

function kos() {
    var list = "<tr><th style=\"margin:auto\">Termék neve: </th><th>darabszáma: </th><th>Ára: </th></tr>\n"

    var ossz = 0;
    var darab = 0;
    var key = "";


    for (var i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        darab = parseInt(localStorage.getItem(key));
        list += "<tr><td>" + key + "</td><td>" + "<button style=\"width:100%\" onclick='ModifyItem(\"" + key + "\", " + "prompt(\"Mennyi legyen?\")" + ")'>" + darab + "</button>" + "</td>" + "</td><td>" + (window[key] * darab) + " Ft" + "</td><td>" + "<button style=\"width:100%; background-color:red\" onclick='RemoveItem(\"" + key + "\")'>X</button>" + "</td></tr>";
        ossz += window[key] * darab;
    }

    list += "<tr> <th>VÉGÖSSZEG: </th> <th> </th> <th>" + ossz + " Ft" + "</th></tr>"



    document.getElementById('tabla').innerHTML = list
}

function termekek() {
    var dbszam = 0;

    for (var i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        console.log(key)
        dbszam += Number(localStorage.getItem(key))
    }

    document.getElementById("darabszam").innerHTML = dbszam

}