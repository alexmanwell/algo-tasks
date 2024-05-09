// https://www.codewars.com/kata/59cdb97172851e2824000094

const findUnknowNumber = (a, b, c, x, y, z) => {
  let result = 0;
  for (let i = 1; i < Number.MAX_SAFE_INTEGER; i++) {
    if (i % a === x && i % b === y && i % c === z) {
      result = i;
      break;
    }
  }

  return result;
};