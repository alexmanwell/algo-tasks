https://www.codewars.com/kata/526571aae218b8ee490006f4

const countBits = function(n) {
    let binaryNumber = "";
    while (n) {
        binaryNumber = n % 2 + binaryNumber;
        n = parseInt(n / 2);
    }

    let count = 0;
    for (let i = 0; i < binaryNumber.length; i++) {
        if (binaryNumber[i] === 1) {
            count++;
        }
    }

    return count;
};