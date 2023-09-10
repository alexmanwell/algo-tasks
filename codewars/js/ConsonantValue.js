// https://www.codewars.com/kata/59c633e7dcc4053512000073

const UNICODE_LETTER_A = 97;

const solve = (s) => {
  const consonants = s.split(/[aeiou]+/);
  const sumsOfSubstrings = [];
  consonants.forEach((substring) => {
    let sum = 0;
    for (let i = 0; i < substring.length; i++) {
      sum += substring.charCodeAt(i) - UNICODE_LETTER_A + 1;
    }
    sumsOfSubstrings.push(sum);
  });

  return Math.max(...sumsOfSubstrings);
};