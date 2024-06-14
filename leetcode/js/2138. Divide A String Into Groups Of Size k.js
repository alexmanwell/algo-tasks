// https://leetcode.com/problems/divide-a-string-into-groups-of-size-k

/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
const divideString = (s, k, fill) => {
  let chunks = new Array(Math.ceil(s.length / k)).fill("");
  let index = 0;
  while (index < chunks.length) {
    for (let i = index * k; i < s.length && i < (index + 1) * k; i++) {
      chunks[index] += s[i];
    }
    ++index;
  }
  const length = chunks.length - 1;
  const countLetters = chunks[length].length;
  if (countLetters < k) {
    chunks[length] = chunks[length] + fill.toString().repeat(k - countLetters);
  }

  return chunks;
};