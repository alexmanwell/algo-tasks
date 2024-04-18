// https://leetcode.com/problems/count-integers-with-even-digit-sum

const sumDigits = (n) => {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);
}

/**
 * @param {number} num
 * @return {number}
 */
const countEven = (num) => {
  let count = 0;
  const bitDepth = (num - num % 10) / 10;
  let k = 0;
  while (k < bitDepth) {
    count += k === 0 ? 4 : 5;
    k++;
  }
  const from = bitDepth === 0 ? 1 : bitDepth * 10;
  for (let i = from; i <= num; i++) {
    if (sumDigits(i) % 2 === 0) {
      count++;
    }
  }

  return count;
};