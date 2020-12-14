// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/* text entry stuff */
var entry = "";
var sgn = "";
function showEntry() {
    var e = document.getElementById('entry');
    e.innerHTML = sgn + entry + "_";
}

/* stack stuff */
var s = { X: 0, Y: 0, Z: 0, T: 0 };
function showStack() {
    var S = document.getElementById('stack');
    S.innerHTML = "";
    for (v in s) {
        S.innerHTML = v + ": " + s[v] + "<br/>" + S.innerHTML;
    }
    // S.innerHTML = "t: "+s.T+"<br/>z: "+s.Z+"<br/>y: "+s.Y+"<br/>x: "+s.X;
}

showStack();

function push(newX) {
    s.T = s.Z; s.Z = s.Y; s.Y = s.X; s.X = newX;
    showStack();
}
function concat(n) {
    entry = entry + n;
    showEntry();
}
function cle() {
    entry = "";
    showEntry();
}
function cls() {
    s.X = s.Y = s.Z = s.T = 0;
    showStack();
}
function enter() {
    push(1 * (sgn + entry));
    entry = "";
    sgn = "";
    showEntry();
}
function chs() {
    if (sgn == "") {
        sgn = "-";
    }
    else if (sgn == "-") {
        sgn = "+";
    }
    else if (sgn == "+") {
        sgn = "-";
    }
    showEntry(); 
}
function divOp() {
    s.X = s.Y / s.X; s.Y = s.Z; s.Z = T;
    showStack();
}
function mulOp() {
    s.X = s.Y * s.X; s.Y = s.Z; s.Z = s.T;
    showStack();
}
function subOp() {
    s.X = s.Y - s.X; s.Y = s.Z; s.Z = s.T;
    showStack();
}
function addOp() {
    s.X = s.Y + s.X; s.Y = s.Z; s.Z = s.T;
    showStack();
}
function kp() {
    var val = event.key;
    var debug = document.getElementById('debug');
    debug.innerHTML = val;

    if ('0' <= val && val <= '9') {
        concat(val);
    }
    else if (val == '.') {
        concat('.');
    }
    else if (val == 'Escape') {
        cle();
    }
    else if (val == 'Backspace') {
        cls();
    }
    else if (val == 'Enter') {
        enter();
    }
    else if (val == '/') {
        divOp();
    }
    else if (val == '*') {
        mulOp();
    }
    else if (val == '-') {
        subOp();
    }
    else if (val == '+') {
        addOp();
    }
}

window.addEventListener('keydown', kp);