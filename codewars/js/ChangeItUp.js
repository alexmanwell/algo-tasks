// https://www.codewars.com/kata/58039f8efca342e4f0000023

const CHAR_CODE_Z = 122;
const CHAR_CODE_A = 97;

function changer(str) {
    let replaceStr = "";
    for (let i = 0; i < str.length; i++) {
        let c = str.charAt(i).toLowerCase();

        if (isNumber(c) || c === ' ') {
            replaceStr += c;
        } else {
            c = String.fromCharCode(validateCharCode(c.charCodeAt(0) + 1));
            if (isVowel(c)) {
                c = c.toUpperCase();
            }
            replaceStr += c;
        }
    }

    return replaceStr;
}

function validateCharCode(n) {
    return (n > CHAR_CODE_Z) ? CHAR_CODE_A : n;
}

function isNumber(c) {
    return Number.isInteger(parseInt(c));
}

function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].includes(c);
}