// 

const sumDigit = (number) => {
    let sum = 0;
    while (number !== 0) {
        sum += number % 10;
        number = parseInt(number / 10);
    }

    return sum;
};

const separateBySumDigits = (arr) => {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const key = sumDigit(arr[i]);
        let values = map.get(key);
        if (values === undefined) {
            values = [];
            values.push(arr[i]);
            map.set(key, values);
        }
        if (i === arr.length - 1) {
            break;
        }
        if (key === sumDigit(arr[i + 1])) {
            values.push(arr[i + 1]);
            map.set(key, values);
        }
    }

    return map;
};

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
};

const equalStartPart = (str, str2, length) => {
    return str.substring(0, length) === str2.substring(0, length);
};

const sortByAlphabeticalOrdering = (map) => {
    let result = [];
    map.forEach((value, key) => {
        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < value.length - 1; j++) {
                const minLength = (value[j].length < value[j + 1].length) ? value[j].length : value[j + 1].length;
                if ((equalStartPart(value[j], value[j + 1], minLength)) && value[j].length > value[j + 1].length) {
                    value = swap(value, j, j + 1);
                }
                for (let k = 0; k < minLength; k++) {
                    if (value[j][k] < value[j + 1][k]) {
                        break;
                    }
                    if (value[j][k] > value[j + 1][k]) {
                        value = swap(value, j, j + 1);
                        break;
                    }
                }
            }
        }
        result = [...result, ...value];
    });

    return result;
};

const sortBySumDigit = (str) => {
    return str.split(" ").sort((a, b) => (sumDigit(a) - sumDigit(b)));
};

const orderWeight = (string) => {
    if (string === "" || string.length === 1) {
        return string;
    }
    const sort = sortBySumDigit(string);
    const separate = separateBySumDigits(sort);

    return sortByAlphabeticalOrdering(separate).join(" ");
};