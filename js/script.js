function quadratic() {
    var a = document.getElementById("quad1").value;
    var b = document.getElementById("quad2").value;
    var c = document.getElementById("quad3").value;


    var ans = calcQuad(a, b, c).split(" ");
    
    if (ans == false) {
        var y = "negativ rot!"
    } else {
    var y = "x1 = " + ans[0] + "<br> x2 = " + ans[1];
    }

    document.getElementById("quad").innerHTML = y;
}


function calcQuad(a, b, c) {
    var del1 = -b

    var x = Math.pow(b, 2) - 4 * a * c;

    if (x < 0) return false;

    var del2 = Math.sqrt(x);

    var x1 = (del1 + del2) / (2 * a);
    var x2 = (del1 - del2) / (2 * a);


    return x1 + " " + x2;
}



function pythagoras() {
    //skaffa a, b och c som variabler
    var a = (document.getElementById("pythA").value);
    var b = (document.getElementById("pythB").value);
    var c = (document.getElementById("pythC").value);

    var standard = ["a = ", "b = ", "c = "];


    var ans = calcPyt(a, b, c);

    if(ans == false) {
        return;
    }

    var numb = ans.split(" ");

    var el = document.getElementsByClassName("pythAns");

    for (let i = 0; i < 3; i++) {
        el[i].innerHTML = standard[i] + numb[i];
    }

    // console.log(ansA + ", " + ansB + ", " + ansC);

}

function calcPyt(a, b, c) {
    var ansA = 0, ansB = 0, ansC = 0;


    if (a == "" && b != "" && c != "") {
        console.log("a");
        ansB = b; ansC = c;

        ansA = Math.sqrt(sq(c) - sq(b));


    } else if (b == "" && a != "" && c != "") {
        console.log("b");

        ansA = a; ansC = c;

        ansB = Math.sqrt(sq(c) - sq(a));

    } else if (c == "" && a != "" && b != "") {

        console.log("c")
        ansA = a; ansB = b;

        ansC = Math.sqrt(sq(a) + sq(b));

    } else {
        console.log("invalid yeeted");
        return false;
    }
    return ansA + " " + ansB + " " + ansC;
}


function line() {
    var x1 = document.getElementById("x1").value;
    var y1 = document.getElementById("y1").value;
    var x2 = document.getElementById("x2").value;
    var y2 = document.getElementById("y2").value;


    ans = calcLine(x1, y1, x2, y2).split(" ");

    var tilt = ans[0]
    var m = ans[1]

    document.getElementById("lineAns").innerHTML = "Equation: " + tilt + "x + " + m; 


}


function calcLine(x1, y1, x2, y2) {
    var dy = y2 - y1;
    var dx = x2 - x1;

    var tilt = dy/dx;

    var m = y1 - tilt * x1;

    return tilt + " " + m
}

function sq(a) {
    return Math.pow(a, 2)
}