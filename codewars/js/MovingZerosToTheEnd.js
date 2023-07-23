// https://www.codewars.com/kata/52597aa56021e91c93000cb0

const moveZeros = (arr) => {
    let result = [];
    let resultZero = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            result.push(arr[i]);
        } else {
            resultZero.push(arr[i]);
        }
    }

    for (let i = 0; i < resultZero.length; i++) {
        result.push(resultZero[i]);
    }

    return result;
};

/* second sloution */
const moveZeros = (arr) => {
    let index = 0;
    let length = arr.length;
    let zeros = [];
    while (index < arr.length) {
        if (arr[index] === 0) {
            const removed = arr.splice(index, 1);
            zeros = [...zeros, ...removed];
            length -= 1;
        } else {
            index++;
        }
    }
    return [...arr, ...zeros];
};