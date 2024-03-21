// https://www.codewars.com/kata/5959b637030042889500001d

const DIGITS = [
  "ZERO",
  "ONE",
  "TWO",
  "THREE",
  "FOUR",
  "FIVE",
  "SIX",
  "SEVEN",
  "EIGHT",
  "NINE",
];

const UNIQUES_LETTER_IN_DIGITS = {
  "Z": "ZERO",
  "W": "TWO",
  "U": "FOUR",
  "X": "SIX",
  "G": "EIGHT"
};

const REGULAR_LETTER_IN_DIGITS = [
  "ONE",
  "THREE",
  "FIVE",
  "SEVEN",
  "NINE"
];

const arrToMap = (arr) => {
  let map = new Map();
  for (let letter of arr) {
    map.set(letter, map.has(letter) ? map.get(letter) + 1 : 1);
  }

  return map;
};

const originalNumber = (s) => {
  const letters = s.split("");
  let map = arrToMap(letters);
  let result = [];
  for (const [_, letters] of Object.entries(UNIQUES_LETTER_IN_DIGITS)) {
    let amounts = new Map();
    for (const letter of letters) {
      amounts.set(letter, map.get(letter));
    }
    const min = Math.min(...amounts.values());
    if (min) {
      for (const letter of amounts.keys()) {
        map.set(letter, map.get(letter) - min);
      }
      result.push(...new Array(min).fill(DIGITS.indexOf(letters)));
    }
    for (const letter of letters) {
      if (map.size && map.get(letter) === 0) {
        map.delete(letter);
      }
    }
  }

  let index = 0;
  while (index < REGULAR_LETTER_IN_DIGITS.length && map.size) {
    let hasAmount = true;
    for (const letter of REGULAR_LETTER_IN_DIGITS[index]) {
      if (!map.has(letter)) {
        hasAmount = false;
        break;
      }
    }
    if (hasAmount) {
      for (const letter of REGULAR_LETTER_IN_DIGITS[index]) {
        map.set(letter, map.get(letter) - 1);
      }
      result.push(index * 2 + 1);
    } else {
      index++;
    }
    for (const letter of REGULAR_LETTER_IN_DIGITS[index]) {
      if (map.size && map.get(letter) === 0) {
        map.delete(letter);
      }
    }
  }

  return result.sort((a, b) => a - b).join("");
};