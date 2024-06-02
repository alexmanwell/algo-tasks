// https://leetcode.com/problems/add-to-array-form-of-integer

const addZeros = (arr, size) => {
  return [
    ...new Array(size).fill(0),
    ...arr
  ]
};

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = (num, k) => {
  let num2 = k.toString().split("").map(Number);
  const size = num.length;
  const size2 = num2.length;
  const max = size >= size2 ? size : size2;
  if (size > size2) {
    num2 = addZeros(num2, max - size2);
  } else {
    num = addZeros(num, max - size);
  }
  let result = new Array(max).fill(0);
  let tail = 0;
  for (let i = max - 1; i >= 0; i--) {
    const sum = num[i] + num2[i] + tail;
    tail = 0;
    if (sum > 9) {
      tail = 1;
      result[i] = sum - 10;
    } else {
      result[i] = sum;
    }
  }
  if (tail === 1) {
    result.unshift(1);
  }

  return result;
};