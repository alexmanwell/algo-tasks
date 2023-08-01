// https://leetcode.com/problems/maximize-sum-of-array-after-k-negations

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const largestSumAfterKNegations = (nums, k) => {
  let sortedNumbers = nums.sort((a, b) => a - b);
  const negativeNumbers = sortedNumbers.filter((elem) => elem < 0);
  const positiveNumbers = sortedNumbers.filter((elem) => elem >= 0);
  let index = 0;
  while (index < negativeNumbers.length) {
    if (k > 0) {
      negativeNumbers[index] = (-1) * negativeNumbers[index];
      k--
    }
    if (k === 0) {
      break;
    }
    index++;
  }

  sortedNumbers = [...negativeNumbers, ...positiveNumbers].sort((a, b) => a - b);
  if (index === negativeNumbers.length && k > 0) {
    if (k % 2 !== 0) {
      sortedNumbers[0] = -sortedNumbers[0];
    }
  }

  return sortedNumbers.reduce((acc, elem) => {
    return acc + elem;
  }, 0);
};