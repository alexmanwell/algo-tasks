// https://leetcode.com/problems/base-7

/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = (num) => {
  let result = [];
  let positiveNumber = Math.abs(num);
  while (positiveNumber >= 7) {
    const number = Math.floor(positiveNumber / 7);
    result.unshift(positiveNumber - number * 7);
    positiveNumber = number;
  }

  return (num >= 0 ? "" : "-") + [positiveNumber, ...result].join("");
};