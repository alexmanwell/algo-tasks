// https://leetcode.com/problems/remove-digit-from-number-to-maximize-result

/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
const removeDigit = (number, digit) => {
  const size = number.length;
  let lastIndex = -1;
  for (let i = 0; i < size; i++) {
    if (number[i] === digit) {
      lastIndex = i;
      if (i < size - 1 && number[i] < number[i + 1]) {
        break;
      }
    }
  }
  return number.substring(0, lastIndex) + number.substring(lastIndex + 1);
};