// https://leetcode.com/problems/excel-sheet-column-title

const AMOUNT_LATIN_LETTERS = 26;

const UTF_POSITION_LETTER_UPPERCASE_A = 65;

/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = (columnNumber) => {
  let letters = [];
  while (columnNumber > 0) {
    columnNumber--;
    const position = columnNumber % AMOUNT_LATIN_LETTERS;
    letters.push(String.fromCharCode(position + UTF_POSITION_LETTER_UPPERCASE_A));
    columnNumber = Math.floor(columnNumber / AMOUNT_LATIN_LETTERS);
  }

  return letters.reverse().join("");
};