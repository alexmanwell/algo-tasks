// https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum
// TODO: Time Limit Exceeded. Testcases passed, but took too long.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canThreePartsEqualSum = (arr) => {
  const size = arr.length;
  let prefixSums = new Array(size).fill(null);
  prefixSums[0] = arr[0];
  for (let i = 1; i < size; ++i) {
    prefixSums[i] = prefixSums[i - 1] + arr[i];
  }
  const totalSum = prefixSums[size - 1];
  if (totalSum % 3 !== 0) {
    return false;
  }
  const targetSum = totalSum / 3;
  let leftIndex = -1;
  for (let i = 0; i < size - 2; ++i) {
    if (prefixSums[i] === targetSum) {
      leftIndex = i;
      break;
    }
  }
  if (leftIndex === -1) {
    return false;
  }
  let rightIndex = -1;
  for (let i = leftIndex + 1; i < size - 1; ++i) {
    if (totalSum - prefixSums[i] === targetSum) {
      rightIndex = i;
      break;
    }
  }

  return leftIndex < rightIndex;
};