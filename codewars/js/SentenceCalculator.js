// https://www.codewars.com/kata/5970fce80ed776b94000008b

const LETTER_A = 97;
const CAPITAL_LETTER_A = 65;

const lettersToNumbers = (s) => {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    const num = s.codePointAt(i);
    sum = (/[a-z]/).test(c) ? sum + (num - LETTER_A + 1) : sum;
    sum = (/[A-Z]/).test(c) ? sum + 2 * (num - CAPITAL_LETTER_A + 1) : sum;
    sum = (/[0-9]/).test(c) ? sum + Number(c) : sum;
  }

  return sum;
};