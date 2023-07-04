// https://www.codewars.com/kata/5bc5c0f8eba26e792400012a

const digits = {
    0 : [[0, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 0]],
    1 : [[0, 0, 1, 1, 0, 0],
        [0, 1, 1, 1, 0, 0],
        [1, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1]],
    2 : [[0, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 1, 1],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1]],
    3 : [[0, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 1, 1],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0],
        [1, 1, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 0]],
    4 : [[1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1]],
    5 : [[1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 0]],
    6 : [[0, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 0]],
    7 : [[1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0]],
    8 : [[0, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 0]],
    9 : [[0, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0]]
};

const validateAmountDigitFormat = (number) => {
    const AMOUNT_DIGIT = 5;
    const length = String(number).length;
    return (length < AMOUNT_DIGIT) ? "0".repeat(AMOUNT_DIGIT - length) + number : String(number);
};

const printNumber = (number, char) => {
    let LENGTH = 6;
    let validNumber = validateAmountDigitFormat(number);
    let result = char.repeat(3 + 7 * 5 + 2) + "\n" + char + " ".repeat(38) + char + "\n";
    for (let row = 0; row < LENGTH; row++) {
        result += char + "  ";
        for (let i = 0; i < validNumber.length; i++) {
            const digit = digits[parseInt(validNumber[i])];
            for (let col = 0; col < LENGTH; col++) {
                result += (digit[row][col] === 1) ? char : " ";
            }
            result += " ";
        }
        result += " " + char + "\n";
    }
    result += char + " ".repeat(38) + char + "\n" + char.repeat(3 + 7 * 5 + 2);

    return result;
};