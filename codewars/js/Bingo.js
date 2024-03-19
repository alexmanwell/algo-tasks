// https://www.codewars.com/kata/5af304892c5061951e0000ce

const LETTERS = ["B", "I", "N", "G", "O"];

const AMOUNT_VALUES = {
  "B": 5,
  "I": 5,
  "N": 4,
  "G": 5,
  "O": 5
};

const vertical = (card) => {
  let result = [];
  for (let col = 0; col < card[0].length; col++) {
    let line = [];
    for (let row = 1; row < card.length; row++) {
      const letter = LETTERS[col];
      const value = card[row][col];
      line.push(letter + value);
    }
    result.push(line);
  }

  return result;
};

const horizontal = (card) => {
  let result = [];
  for (let row = 1; row < card.length; row++) {
    let line = [];
    for (let col = 0; col < card[row].length; col++) {
      const letter = LETTERS[col];
      const value = card[row][col];
      line.push(letter + value);

    }
    result.push(line);
  }

  return result;
};

const diagonal = (card) => {
  let left = [];
  let right = [];
  for (let i = 1; i < card.length; i++) {
    const letter = LETTERS[i - 1];
    let value = card[i][i - 1];
    left.push(letter + value);
    value = card[card.length - i][i - 1];
    right.push(letter + value);
  }

  return [left, right];
};

const checkBingo = (arrays, numbers, amount = 0) => {
  for (let i = 0; i < arrays.length; i++) {
    let count = 0;
    for (const number of numbers) {
      if (arrays[i].includes(number)) {
        count++;
      }
    }
    const volume = amount ? amount : AMOUNT_VALUES[LETTERS[i]];
    if (volume === count) {
      return true;
    }
  }

  return false;
};

const bingo = (card, numbers) => {
  return (
    checkBingo(diagonal(card), numbers, 4) ||
    checkBingo(horizontal(card), numbers) ||
    checkBingo(vertical(card), numbers)
  );
};