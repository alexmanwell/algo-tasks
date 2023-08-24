// https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
    const count = s.split('').map(letter => letter.match(/[^a-m]/)).join("").length;

    return count + "/" + s.length;
}