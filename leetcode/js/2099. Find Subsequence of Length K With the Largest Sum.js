// https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum

const maxElement = (arr) => {
  let max = Number.MIN_SAFE_INTEGER;
  for (let elem of arr) {
    if (elem > max) {
      max = elem;
    }
  }

  return max;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSubsequence = (nums, k) => {
  const maxElements = [];
  while (k > 0) {
    const max = maxElement(nums);
    const index = nums.findIndex((elem) => elem === max);
    maxElements[index] = max;
    nums[index] = undefined;
    k--;
  }

  return maxElements.filter((n) => {
    return (n === Number(n));
  });
};

console.log(maxSubsequence([-1, -2, 3, 4], 3));
console.log(maxSubsequence([2, 1, 3, 3], 2));
console.log(maxSubsequence([3, 4, 3, 3], 2));
console.log(maxSubsequence(
  [11, -40, 2, -7, -37, 6, 11, -13, -32, -29, 5, -12, 9, -25, 27, -10, -24, 7, 40, -26, 29, 29, -5, 20, -7, 12, 0,
    9, 25, 24, -3, -1, 20, -1, 5, -40, 29, -14, 1, -13, -27, -39, -16, -12, 20, -20, -8, 31, 5, 33, -29, -10, -2, 31, 7,
    10, 37, 20, 4, -10, -35, -31, -4, -32, -20, 5, 25, 22, -7, 15, 39, -35, 11, 27, 13, 10, 32, -37, -1, 19, 17, 17, 34,
    9, 29, 36, -30, -32, -10, -35, -8, 39, 25, 34], 68));