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

/*
Second solution
*/
const lengthOfLongestSubstring = (s) => {
  const seen = new Map();
  let start = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (seen.has(s[i])) {
      start = Math.max(seen.get(s[i]) + 1, start);
    }
    seen.set(s[i], i);
    maxLen = Math.max(i - start + 1, maxLen);
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("au"));
