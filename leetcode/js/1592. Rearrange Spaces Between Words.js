// https://leetcode.com/problems/rearrange-spaces-between-words

/**
 * @param {string} text
 * @return {string}
 */
const reorderSpaces = (text) => {
  let countSpaces = 0;
  for (const c of text) {
    if (c === " ") {
      ++countSpaces;
    }
  }
  const words = text.trim().split(/\s+/);
  const countWords = words.length;
  const count = Math.floor(countSpaces / (countWords - 1));
  if (count === Infinity) {
    return words.join("") + " ".repeat(countSpaces);
  }

  return (
    words.map((word, i, arr) =>
      i < (arr.length - 1)
        ? word + " ".repeat(count)
        : word.join("")
    )
    + " ".repeat(countSpaces - count * (countWords - 1))
  );
};