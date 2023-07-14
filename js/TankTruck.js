// https://www.codewars.com/kata/55f3da49e83ca1ddae0000ad

function tankvol(h, d, vt) {
    return parseInt(vt * ((d = Math.acos(h = 1 - 2 * h / d)) - Math.sin(d) * h) / Math.PI);
}