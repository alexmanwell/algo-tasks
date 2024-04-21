// https://leetcode.com/problems/partition-equal-subset-sum

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = (nums) => {
  const arr = nums.sort((a, b) => a - b);
  const targetSum = arr.reduce((a, b) => a + b) / 2;
  if (Math.floor(targetSum) !== targetSum) {
    return false;
  }
  let subsetSums = new Array(targetSum + 1).fill(false);
  subsetSums[0] = true;
  for (const num of nums) {
    for (let j = targetSum; j >= num; --j) {
      subsetSums[j] = subsetSums[j] || subsetSums[j - num];
    }
  }

  return subsetSums[targetSum];
};