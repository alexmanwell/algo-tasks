// https://www.codewars.com/kata/55a5c82cd8e9baa49000004c

function divisibleCount(x, y, k) {
    return Math.floor(y / k) - Math.floor((x - 1) / k);
}