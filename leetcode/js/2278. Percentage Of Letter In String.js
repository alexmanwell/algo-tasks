// https://leetcode.com/problems/percentage-of-letter-in-string

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
const percentageLetter = (s, letter) => {
  const countLetter = s.split("").filter(c => c === letter);
  return Math.floor((countLetter.length / s.length) * 100)
};