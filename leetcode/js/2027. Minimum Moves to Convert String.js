// https://leetcode.com/problems/minimum-moves-to-convert-string

/**
 * @param {string} s
 * @return {number}
 */
const minimumMoves = (s) => {
  const arr = s.split("");
  let count = 0;
  let index = 0;
  while (index < arr.length) {
    if (arr[index] === "O") {
      ++index;
      continue;
    }
    index += index < arr.length - 2
      ? 3
      : index < arr.length - 1
        ? 2
        : 1;
    ++count;
  }

  return count;
};