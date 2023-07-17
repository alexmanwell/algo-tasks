// https://www.codewars.com/kata/55911ef14065454c75000062

const fillStartData = (size) =>{
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(0);
    }
    return arr;
};

const removeExtraZeros = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "0") {
        } else {
            return str.substring(i, str.length);
        }
    }

    return str;
};

const sumColumnsArray = (arr) => {
    let result = fillStartData(arr[0].length);
    for (let row = arr.length - 1; row >= 0; row--) {
        let depthDigit = 0;
        for (let col = arr[row].length - 1; col >= 0; col--) {
            const sum = (result[col] + arr[row][col] + depthDigit);
            result[col] = sum % 10;
            depthDigit = parseInt(sum / 10);
        }
    }

    return result;
};

const multiply = (a, b) => {
    if (parseInt(a) === 0 || parseInt(b) === 0) {
        return "0";
    }

    const multipliers = removeExtraZeros(a).split("");
    const multiplicands = removeExtraZeros(b).split("");
    let multiplications = [];
    let multiplication = [];
    for (let j = multipliers.length - 1; j >= 0; j--) {
        let depthDigit = 0;
        for (let i = multiplicands.length - 1; i >= 0; i--) {
            const multiply = multiplicands[i] * multipliers[j];
            if (i === 0) {
                multiplication.unshift((multiply + depthDigit) % 10);
                multiplication.unshift(parseInt((multiply + depthDigit) / 10));
                break;
            }
            multiplication.unshift((multiply + depthDigit) % 10) ;
            depthDigit = parseInt((multiply + depthDigit) / 10);
        }

        let count = j - 1;
        while (count >= 0) {
            count--;
            multiplication.unshift(0);
        }

        multiplications.push(multiplication);
        multiplication = [];

        count = 0;
        while (count < multipliers.length - 1 - j) {
            count++;
            multiplication.push(0);
        }
    }

    return removeExtraZeros(sumColumnsArray(multiplications).join(""));
}