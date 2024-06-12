// https://leetcode.com/problems/minimize-string-length

/**
 * @param {string} s
 * @return {number}
 */
const minimizedStringLength = (s) => {
  const chars = s.split("");
  let index = 0;
  while (index < chars.length) {
    const nextIndex = chars.indexOf(chars[index], index + 1);
    if (chars[nextIndex] !== "" && nextIndex !== -1) {
      chars[nextIndex] = "";
      --index;
    }
    ++index;
  }

  return chars
    .filter(c => c.length > 0)
    .length;
};