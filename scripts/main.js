"use strict";
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var inputs = document.getElementsByTagName('input');
for (var i = 0; i < 11; i++) {
    inputs[i].onchange = draw_lines;
}
function draw_lines() {
    var numbers = '';
    for (var i = 1; i < 11; i++) {
        numbers = numbers.concat(inputs[i].value);
    }
    var code = UpcA.encode(inputs[0].value, numbers);
    if (code !== null) {
        var lines = code[0];
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
        inputs[11].value = code[1].toString();
    }
    else {
        alert('Error');
    }
}
draw_lines();
