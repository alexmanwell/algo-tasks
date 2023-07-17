// https://www.codewars.com/kata/622de76d28bf330057cd6af8

const countDigits = (number) => {
    let count = 0;
    while (number !== 0) {
        number = parseInt(number / 10);
        count++;
    }

    return count;
};

const amountOfPages = (summary) => {
    let number = 0;
    while (summary !== 0) {
        summary -= countDigits(++number);
    }

    return number;
};