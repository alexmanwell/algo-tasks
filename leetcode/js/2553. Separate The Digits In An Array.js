// https://leetcode.com/problems/separate-the-digits-in-an-array

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
const separateDigits = (numbers) => {
  let size = numbers.reduce((acc, n) => acc + n.toString().length, 0);
  let j = size - 1;
  let digits = new Array(size).fill(null);
  for (let i = numbers.length - 1; i >= 0; i--) {
    let number = numbers[i];
    while (number > 0) {
      const tail = number % 10;
      digits[j] = tail;
      j--;
      number = (number - tail) / 10;
    }
  }

  return digits;
};