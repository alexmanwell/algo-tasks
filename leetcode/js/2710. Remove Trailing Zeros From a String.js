// https://leetcode.com/problems/remove-trailing-zeros-from-a-string

/**
 * @param {string} num
 * @return {string}
 */
const removeTrailingZeros = (num) => {
  let index = num.length;
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] === "0") {
      index = i;
    } else {
      break;
    }
  }

  return num.substring(0, index);
};