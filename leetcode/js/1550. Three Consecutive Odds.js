// https://leetcode.com/problems/three-consecutive-odds

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] % 2 === 1) {
      ++count;
      ++i;
    }
    if (count >= 3) {
      return true;
    } else {
      count = 0;
    }
  }

  return false;
};