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
  const digits = s.split("");
  let differences = new Array(digits.length - 1).fill(null);
  for (let i = digits.length - 1; i >= 1; i--) {
    const prev = +digits[i - 1];
    const current = +digits[i];
    if (current % 2 === prev % 2 && prev > current) {
      differences[digits.length - 1 - i] =
        Number(s.slice(i - 1)) -
        Number(swap([...digits], i, i - 1).slice(i - 1).join(""));
    }
  }

  if (!differences.every(n => n === null)) {
    const max = Math.max(...differences);
    const index = differences.length - 1 - differences.indexOf(max);
    return swap(
      [...digits],
      index + 1,
      index
    ).join("");
  }

  return s;
};