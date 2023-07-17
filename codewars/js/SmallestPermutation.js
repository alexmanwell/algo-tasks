// https://www.codewars.com/kata/5fefee21b64cc2000dbfa875

const minPermutation = (n) => {
    let digits = Array.from(String(Math.abs(n)), Number).sort();
    let countLeadingZeros = 0;

    while (digits[0] === 0) {
        countLeadingZeros++;
        digits.shift();
    }
    let counter = 0;
    while (counter < countLeadingZeros) {
        digits.splice(1, 0, 0);
        counter++;
    }
    return n < 0 ? Number(digits.join("")) * (-1) : Number(digits.join(""));
};