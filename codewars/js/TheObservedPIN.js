const ADJACENT_DIGITS = {
  1 : [1, 2, 4],
  2 : [1, 2, 3, 5],
  3 : [2, 3, 6],
  4 : [1, 4, 5, 7],
  5 : [2, 4, 5, 6, 8],
  6 : [3, 5, 6, 9],
  7 : [4, 7, 8],
  8 : [5, 7, 8, 9, 0],
  9 : [6, 8, 9],
  0 : [8, 0]
};

const getPINs = (observed) => {
  if (observed.length === 1) {
    return ADJACENT_DIGITS[observed].map(elem => elem.toString());
  }

  const digits = observed.split("");
  let pinCodes = [];
  for (let digit of ADJACENT_DIGITS[digits[0]]) {
    pinCodes.push(digit);
  }

  for (let i = 1; i < digits.length; i++) {
    const temp = [];
    const values = ADJACENT_DIGITS[digits[i]];
    for (let value of values) {
      for (let partOfCodes of pinCodes) {
        temp.push(partOfCodes.toString() + value.toString());
      }
    }
    pinCodes = temp;
  }

  return pinCodes;
};

console.log(getPINs("369"));