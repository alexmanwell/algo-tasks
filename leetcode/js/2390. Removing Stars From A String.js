// https://leetcode.com/problems/removing-stars-from-a-string

/**
 * @param {string} s
 * @return {string}
 */
const removeStars = (s) => {
  let chars = [...s];
  let countStars = 0;
  let index = chars.length - 1;
  while (index >= 0) {
    while (chars[index] === "*") {
      ++countStars;
      chars[index] = "";
      --index;
    }
    if (countStars > 0 && (/[a-z]/.test(chars[index]))) {
      --countStars;
      chars[index] = "";
    }
    --index;
  }

  return chars.filter(c => c).join("");
};