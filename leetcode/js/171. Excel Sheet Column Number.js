// https://leetcode.com/problems/excel-sheet-column-number

const AMOUNT_LATIN_LETTERS = 26;

const UTF_POSITION_LETTER_UPPERCASE_A = 65;

/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = (columnTitle) => {
  const degrees = columnTitle.length;
  let result = 0;
  for (let i = 0; i < degrees; i++) {
    result +=
      (columnTitle.charCodeAt(i) - UTF_POSITION_LETTER_UPPERCASE_A + 1)
      * Math.pow(AMOUNT_LATIN_LETTERS, degrees - i - 1);
  }

  return result;
};