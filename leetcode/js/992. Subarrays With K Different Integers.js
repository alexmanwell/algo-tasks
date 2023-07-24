// https://leetcode.com/problems/subarrays-with-k-different-integers/description
// This solution is pass, but it don't pass time limit.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysWithKDistinct = (nums, k) => {
  let differentElements = new Set([...nums]);
  if (differentElements.size < k) {
    return 0;
  }

  let sequences = [];
  let sequence = [];
  let index = 0;
  let shiftIndex = 0;
  let countUniqueNumber = 0;
  while ((shiftIndex !== nums.length - k) || (shiftIndex + index !== nums.length)) {
    const number = nums[index + shiftIndex];
    if (number && !sequence.includes(number) && countUniqueNumber < k) {
      sequence.push(number);
      index++;
      countUniqueNumber++;
      if (countUniqueNumber === k) {
        sequences.push([...sequence]);
      }
    } else if (sequence.includes(number) && countUniqueNumber < k) {
      index++;
      sequence.push(number);
      if (countUniqueNumber === k) {
        sequences.push([...sequence]);
      }
    } else if (sequence.includes(number) && countUniqueNumber === k) {
      sequence.push(number);
      sequences.push([...sequence]);
      index++;
    } else if (!sequence.includes(number)) {
      countUniqueNumber = 0;
      index = 0;
      shiftIndex++;
      sequence = [];
    }
  }

  return sequences.length;
};