// https://www.codewars.com/kata/541c8630095125aba6000c00

const numberToArray = (n) => {
    let digits = [];
    while (n > 0) {
        digits.unshift(n % 10);
        n = parseInt(n / 10);
    }
    return digits;
};

const reduce = (digits) => {
    return digits.reduce((acc, el) => acc + el);
};

const digitalRoot = (n) => {
    if (n === 0) {
        return 0;
    }

    do {
        const digits = numberToArray(n);
        n = reduce(digits);
    } while (parseInt(n / 10) > 0);

    return n;
};