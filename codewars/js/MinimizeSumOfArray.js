// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b

const minSum = (arr) => {
    let sum = 0;
    arr.sort((a,b) => a - b);
    for (let i = 0; i < parseInt(arr.length / 2); i++) {
        sum += arr[i] * arr[arr.length - 1 - i];
    }

    return sum;
};