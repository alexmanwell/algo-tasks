// https://www.codewars.com/kata/5659c6d896bc135c4c00021e

const swap = (arr, from, to) => {
    let temp = arr[from];
    arr[from] = arr[to];
    arr[to] = temp;

    return arr;
};

const nextSmaller = (n) => {
    let digits = n.toString().split("");
    let hasSmaller = false;
    let index = 0;
    for (let i = 0; i < digits.length - 1; i++) {
        if (digits[i] > digits[i + 1]) {
            index = i;
            hasSmaller = true;
        }
    }

    if (!hasSmaller) {
        return -1;
    }

    for (let i = digits.length - 1; i > 0; i--) {
        if (i === index) {
            i--;
        }
        if (digits[i] < digits[index]) {
            digits = swap(digits, i, index);
            break;
        }
    }

    if (digits[0] === '0') {
        return -1;
    }

    return parseInt(digits.slice(0, index + 1).concat(digits.slice(index + 1).sort((a, b) => b - a)).join(""));
}