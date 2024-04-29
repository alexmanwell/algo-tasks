// https://leetcode.com/problems/largest-palindromic-number

const countDigits = (number) => {
  let map = new Map();
  for (let digit of number) {
    map.set(digit, map.has(digit) ? map.get(digit) + 1 : 1);
  }

  return map;
}

/**
 * @param {string} num
 * @return {string}
 */
const largestPalindromic = (num) => {
  let map = countDigits(num);
  let middle = "";
  let half = "";
  for (let i = 9; i >= 0; i--) {
    const digit = i.toString();
    if (map.get(digit) > 1) {
      if (digit !== "0" || (digit === "0" && half.length > 0)) {
        half += digit.toString().repeat(Math.floor(map.get(digit)) / 2);
      }
      map.set(digit, map.get(digit) % 2);
    }
    if (map.get(digit) === 1 && middle === "") {
      middle = digit;
      map.set(digit, map.get(digit) - 1);
    }
  }
  const result = half + middle + [...half].reverse().join("");

  return result.length === 0 ? "0" : result;
};