// https://www.codewars.com/kata/589d74722cae97a7260000d9

const LETTER_0 = "o";
const LETTER_D = "d";

const odd = (str) => {
  const letters = str.split("");
  let countOdd = 0;
  let count = 0;
  let index = 0;
  for (let i = index; i < letters.length; i++) {
    if (letters.includes(LETTER_0, index)) {
      index = letters.indexOf(LETTER_0);
      letters[index] = ".";
      count++;
    }
    for (let j = index + 1; j < letters.length; j++) {
      if (letters.includes(LETTER_D, index + 1)) {
        letters[letters.indexOf(LETTER_D, j)] = ".";
        count++;
        if (count === 3) {
          count = 0;
          countOdd++;
          i = index + 1;
          break;
        }
      }
    }
  }

  return countOdd;
};