// https://www.codewars.com/kata/53046ceefe87e4905e00072a

const palindrome = (string) => {
  const letters = string
    .toString()
    .toLowerCase()
    .split("")
    .filter(c => (/[a-z0-9]/).test(c));

  return [...letters].reverse().join("") === letters.join("");
};