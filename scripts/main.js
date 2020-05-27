"use strict";
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var lines = UpcA.encode('0', '1234567890');
console.log('0', '1234567890');
if (lines !== null) {
    var x = 0;
    var colors = ['black', 'white'];
    var color = true;
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        ctx.fillStyle = colors[color ? 0 : 1];
        color = !color;
        ctx.fillRect(x, 0, line, 1);
        x += line;
    }
}
