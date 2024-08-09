// https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}

/**
 * @param {string} s
 * @return {string}
 */
const getSmallestString = (s) => {
  let differences = new Array(s.length - 1).fill(null);
  for (let i = s.length - 1; i >= 1; i--) {
    const prev = +s[i - 1];
    const current = +s[i];
    if (current % 2 === prev % 2 && prev > current) {
      differences[s.length - 1 - i] =
        Number(s.slice(i - 1)) -
        Number(swap([...s], i, i - 1).slice(i - 1).join(""));
    }
  }

  if (!differences.every(n => n === null)) {
    const max = Math.max(...differences);
    const index = differences.length - 1 - differences.indexOf(max);
    return swap(
      [...s],
      index + 1,
      index
    ).join("");
  }

  return s;
};