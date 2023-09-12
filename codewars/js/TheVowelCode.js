// https://www.codewars.com/kata/53697be005f803751e0015aa

const VOWELS = ["a", "e", "i", "o", "u"];

const encode = (s) => {
  return s
    .split("")
    .map(letter => VOWELS.includes(letter) ? VOWELS.indexOf(letter) + 1 : letter)
    .join("");
};

const decode = (s) => {
  return s
    .split("")
    .map(c => c.match(/[a-z]/) ? c : VOWELS[Number(c) - 1])
    .join("");
};