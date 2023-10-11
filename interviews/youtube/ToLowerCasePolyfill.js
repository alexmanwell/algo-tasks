// https://www.youtube.com/watch?v=L2RPLVLKiAY
// timeline position 00:41:02 функция, которая делает все символы lowercase, но без toolLowerCase

const CAPITAL_LETTER_A_UNICODE = 65;
const CAPITAL_LETTER_Z_UNICODE = 90;
const SMALL_LETTER_A_UNICODE = 97;
const DIFF_UPPER_LOWER_CASE = SMALL_LETTER_A_UNICODE - CAPITAL_LETTER_A_UNICODE;

/**
 * @param {string}
 * @return {string}
 */
String.prototype.MyLowerCase = function () {
  let lowerCase = [];
  for (let i = 0; i < this.length; i++) {
    const unicode = this.charCodeAt(i);
    if (unicode >= CAPITAL_LETTER_A_UNICODE
      && unicode <= CAPITAL_LETTER_Z_UNICODE
    ) {
      const upperCase = String.fromCharCode(unicode + DIFF_UPPER_LOWER_CASE);
      lowerCase.push(upperCase);
    }
  }

  return lowerCase.join("");
};