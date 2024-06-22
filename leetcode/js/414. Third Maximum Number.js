// https://leetcode.com/problems/third-maximum-number

/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = (nums) => {
  if (nums.length < 3) {
    return Math.max(...nums);
  }
  let candidates = new Array(3).fill(Number.MIN_SAFE_INTEGER);
  for (const num of nums) {
    if (candidates[0] <= num) {
      if (candidates[0] === num) {
        continue;
      }
      if (candidates[0] === Number.MIN_SAFE_INTEGER) {
        candidates[0] = num;
      } else {
        candidates[2] = candidates[1];
        candidates[1] = candidates[0];
        candidates[0] = num;
      }
    } else if (candidates[1] <= num) {
      if (candidates[1] === num) {
        continue;
      }
      if (candidates[0] === Number.MIN_SAFE_INTEGER) {
        candidates[1] = num;
      } else {
        candidates[2] = candidates[1];
        candidates[1] = num;
      }
    } else if (candidates[2] < num) {
      candidates[2] = num;
    }
  }

  const selectResultCandidate = (arr) => {
    let count = 0;
    for (let i = arr.length - 1; i >= 1; i--) {
      if (arr[i] < arr[i - 1]) {
        ++count;
      }
    }

    return count < 2 ? Math.max(...arr) : arr[2]
  }

  return candidates.includes(Number.MIN_SAFE_INTEGER)
    ? Math.max(...candidates)
    : selectResultCandidate(candidates);
};