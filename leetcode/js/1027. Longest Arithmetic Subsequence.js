// https://leetcode.com/problems/longest-arithmetic-subsequence/description/

/**
 * @param {number[]} nums
 * @return {number}
 */

const longestArithSeqLength = (nums) => {
  if (nums.length <= 2) {
    return nums.length;
  }

  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let currentElement = nums[i];
      let nextElement = nums[j];
      const step = nextElement - currentElement;
      if (step === 0) {
        let sequences = map.get(step);
        if (!sequences) {
          sequences = [];
        }
        for (let sequence of sequences) {
          if (sequence[sequence.length - 1] === nextElement) {
            sequence.push(nextElement);
          }
        }
        if (currentElement === nextElement) {
          sequences.push([currentElement, nextElement]);
        }
        map.set(step, sequences);
        break;
      } else {
        let sequences = map.get(step);
        if (!sequences) {
          sequences = [];
        }
        for (let sequence of sequences) {
          if (sequence[sequence.length - 1] + step === nextElement) {
            sequence.push(nextElement);
          }
        }
        if (currentElement !== nextElement) {
          sequences.push([currentElement, nextElement]);
        }
        map.set(step, sequences);
      }
    }
  }

  let max = 0;
  for (let sequences of map.values()) {
    for (let sequence of sequences) {
      const length = sequence.length;
      if (max < length) {
        max = length;
      }
    }
  }

  return max;
};

/*
Second solution
*/

const longestArithSeqLength = (nums) => {
  const length = nums.length;
  if (length <= 2) {
    return length;
  }

  const lengthSequences = new Array(length);
  for (let i = 0; i < length; i++) {
    lengthSequences[i] = new Map();
  }

  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const step = nums[j] - nums[i];
      if (lengthSequences[i].has(step)) {
        lengthSequences[j].set(step, lengthSequences[i].get(step) + 1);
      } else {
        lengthSequences[j].set(step, 2);
      }
      max = Math.max(max, lengthSequences[j].get(step));
    }
  }

  return max;
};