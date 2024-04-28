// https://leetcode.com/problems/largest-palindromic-number
// TODO: doesn't consider specific cases, for example input string: "00001105", must return output: "1005001".

/**
 * @param {string} num
 * @return {string}
 */
const largestPalindromic = (num) => {
  let map = new Map();
  for (let digit of num) {
    map.set(digit, map.has(digit) ? map.get(digit) + 1 : 1);
  }
  const sorted = [...map.entries()].sort(([k1, v1], [k2, v2]) => +k2 - (+k1) || v2 - v1);
  const oddDigit = sorted.filter(([digit, value]) => value % 2 !== 0);
  const evenDigit = sorted.filter(([digit, value]) => value % 2 === 0);
  let maxAmountOddDigit = oddDigit[0][1];
  let maxDigit = 0;
  for (let [digit, amount] of oddDigit) {
    if (maxAmountOddDigit === amount) {
      if (digit > maxDigit) {
        maxDigit = digit;
      }
    }
  }
  let result = "";
  if (maxAmountOddDigit > 1) {
    for (const [digit, amount] of evenDigit) {
      if (maxDigit > digit) {
        const half = Math.floor(maxAmountOddDigit / 2);
        result += maxDigit.toString().repeat(half);
      } else {
        const half = Math.floor(amount / 2);
        result += digit.toString().repeat(half);
      }
    }
    result += maxDigit + result.split("").reverse().join("");
  } else if (maxAmountOddDigit === 1) {
    if (evenDigit[0][0] !== "0") {
      for (const [digit, amount] of evenDigit) {
        const half = Math.floor(amount / 2);
        result += digit.toString().repeat(half);
      }
    }
    result += maxDigit + result.split("").reverse().join("");
  } else {
    for (const [digit, amount] of evenDigit) {
      const half = Math.floor(amount / 2);
      result += digit.toString().repeat(half);
    }
    result += result.split("").reverse().join("");
  }

  return result;
};