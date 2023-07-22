// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = (s) => {
  if (s.length === 1) {
    return 1;
  }
  let list = s.split("");

  let sequences = [];
  const length = list.length;
  let sequence = new Set(list[0]);
  let index = 1;
  while (index < length) {
    const symbol = list[index];
    if (!sequence.has(symbol)) {
      sequence.add(symbol);
      index++;
    } else {
      sequences.push(sequence);
      index = findIndex(symbol, list.slice(0, index + 1));
      sequence = new Set();
    }
  }

  if (index === length) {
    sequences.push(sequence);
  }

  let max = 0;
  for (let sequence of sequences) {
    const length = sequence.size;
    if (max < length) {
      max = length;
    }
  }
  return max;
};

/**
 * @param {string} symbol
 * @param {array} arr
 * @return {number}
 */

const findIndex = (symbol, arr) => {
  let index = -1;
  for (let i = arr.length - 1; i > 0; i--) {
    if (symbol === arr[i - 1]) {
      index = i;
      break;
    }
  }

  return index;
};