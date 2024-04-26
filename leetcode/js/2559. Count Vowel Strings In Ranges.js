// https://leetcode.com/problems/count-vowel-strings-in-ranges

const VOWELS = new Set(Array.of("a", "e", "i", "o", "u"));

/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
const vowelStrings = (words, queries) => {
  let prefixSum = new Array(words.length + 1).fill(0);
  for (let i = 0; i < words.length; i++) {
    const firstLetter = words[i][0];
    const lastLetter = words[i][words[i].length - 1];
    const hasVowels = VOWELS.has(firstLetter) && VOWELS.has(lastLetter);
    if (hasVowels) {
      prefixSum[i + 1] = prefixSum[i] + 1;
    } else {
      prefixSum[i + 1] = prefixSum[i];
    }
  }

  let result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    let [start, end] = queries[i];
    result[i] = prefixSum[end + 1] - prefixSum[start];
  }

  return result;
};