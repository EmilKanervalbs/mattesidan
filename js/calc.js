
function calcQuad(a, b, c) {
    var del1 = -b
    var x = Math.pow(b, 2) - 4 * a * c;

    if (x < 0) return false;


    var del2 = Math.sqrt(x);

    var x1 = (del1 + del2) / (2 * a);
    var x2 = (del1 - del2) / (2 * a);

    return x1 + " " + x2;
}


function calcPyth(a, b, c) {
    
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

module.exports = { calcQuad, calcPyth, calcLine };
