"use strict";
var UpcA;
(function (UpcA) {
    var LINES = {
        's': [1, 1, 1],
        'm': [1, 1, 1, 1, 1],
        'e': [1, 1, 1],
        '0': [3, 2, 1, 1],
        '1': [2, 2, 2, 1],
        '2': [2, 1, 2, 2],
        '3': [1, 4, 1, 1],
        '4': [1, 1, 3, 2],
        '5': [1, 2, 3, 1],
        '6': [1, 1, 1, 4],
        '7': [1, 3, 1, 2],
        '8': [1, 2, 1, 3],
        '9': [3, 1, 1, 2]
    };
    function encode(prefix, code) {
        if (code.match(/^[0-9]{10}$/) == null || prefix.match(/^[0-9]{1}$/) == null)
            return null;
        var lines = LINES.s;
        lines = lines.concat(LINES[prefix]);
        for (var i = 0; i < code.length; i++) {
            lines = lines.concat(LINES[code[i]]);
            if (i == 4) {
                lines = lines.concat(LINES.m);
            }
        }
        var check_digit = parseInt(prefix);
        for (var i = 1; i < code.length; i += 2)
            check_digit += parseInt(code[i]);
        check_digit *= 3;
        for (var i = 0; i < code.length; i += 2)
            check_digit += parseInt(code[i]);
        check_digit %= 10;
        check_digit = 10 - check_digit;
        if (check_digit == 10)
            check_digit = 0;
        lines = lines.concat(LINES[check_digit.toString()]);
        lines = lines.concat(LINES.e);
        return lines;
    }
    UpcA.encode = encode;
})(UpcA || (UpcA = {}));
