// https://www.codewars.com/kata/529bf0e9bdf7657179000008

function validSolution(board){
    const BOARD_SIZE = 9;
    const SUB_BOARD_SIZE = 3;

    let isValid = true;
    for (let r = 0; r < BOARD_SIZE; r++) {
        let numbers = [];
        for (let c = 0; c < BOARD_SIZE; c++) {
            numbers.push(board[r][c]);
        }
        if (!isDistinctNumbers(numbers)) {
            isValid = false;
        }
        numbers = [];
        for (let j = 0; j < BOARD_SIZE; j++) {
            numbers.push(board[j][r]);
        }
        if (!isDistinctNumbers(numbers)) {
            isValid = false;
        }
    }

    let rowSubBoard = 0;
    while (rowSubBoard < SUB_BOARD_SIZE) {
        let numbers = [];
        let colSubBoard = 0;
        while (colSubBoard < SUB_BOARD_SIZE) {
            for (let k = rowSubBoard * SUB_BOARD_SIZE; k < (rowSubBoard + 1) * SUB_BOARD_SIZE; k++) {
                for (let j = colSubBoard * SUB_BOARD_SIZE; j < (colSubBoard + 1) * SUB_BOARD_SIZE; j++) {
                    numbers.push(board[k][j]);
                }
            }

            if (!isDistinctNumbers(numbers)) {
                isValid = false;
            }
            numbers = [];
            colSubBoard++;
        }
        rowSubBoard++;
    }

    return isValid;
}

function isDistinctNumbers(numbers) {
    numbers = numbers.sort();
    let isDistinct = false;
    for (let i = 0; i < numbers.length; i++) {
        isDistinct = (numbers[i] == i + 1) ? true : false;
    }

    return isDistinct;
}