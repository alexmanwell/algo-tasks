// https://www.codewars.com/kata/637d1d6303109e000e0a3116
// TODO: Don't pass all tests.

const findMatchedByPattern = (pattern) => (str) => {
  let index = -1;
  for (const letter of pattern) {
    const indexOf = str.indexOf(letter, index + 1);
    if (indexOf === -1) {
      return false;
    }
    index = indexOf;
  }

  return true;
};