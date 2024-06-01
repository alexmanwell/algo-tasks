// https://leetcode.com/problems/add-strings

const addedZeros = (arr, size) => {
  return [
    ...new Array(size - arr.length).fill(0),
    ...arr.split("").map(Number)
  ];
}

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
  const size = num1.length >= num2.length ? num1.length : num2.length;
  let numbers1 = [];
  let numbers2 = [];
  if (num1.length < size) {
    numbers1 = addedZeros(num1, size);
    numbers2 = num2.split("").map(Number);
  } else {
    numbers1 = num1.split("").map(Number);
    numbers2 = addedZeros(num2, size);
  }
  let digits = new Array(size).fill("");
  let tail = 0;
  for (let i = size - 1; i >= 0; i--) {
    let sum = numbers1[i] + numbers2[i] + tail;
    tail = 0;
    if (sum > 9) {
      sum -= 10;
      tail = 1;
    }
    digits[i] = sum;
  }
  if (tail === 1) {
    digits.unshift(1);
  }

  return digits.join("");
};