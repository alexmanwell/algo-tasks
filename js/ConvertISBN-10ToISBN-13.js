// https://www.codewars.com/kata/61ce25e92ca4fb000f689fb0

const PREFIX_NUMBER = 978;
const ONE_MULTIPLIER = 1;
const THREE_MULTIPLIER = 3;

function isbnConverter(isbn) {
    const numbers = PREFIX_NUMBER + isbn.substring(0, isbn.length - 1).split("-").join("");
    const sum = numbers.split("").reduce((total, current, index) => {
        return (index % 2 === 0) ? total + current * ONE_MULTIPLIER : total + current * THREE_MULTIPLIER;
    }, 0);
    const checkDigit = (sum % 10 !== 0) ? 10 - sum % 10 : 0;

    return PREFIX_NUMBER + "-" + isbn.substring(0, isbn.length - 1) + checkDigit;
}