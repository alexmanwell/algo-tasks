// https://leetcode.com/problems/roman-to-integer

/**
 * @param {string} s
 * @return {number}
 */

const ROMAN_NUMBER = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

const romanToInt = (s) => {
  const romans = s.split("");
  let numbers = [];
  for (let i = 0; i < romans.length; i++) {
    const next = i + 1;
    let number = (romans[next]) ? ROMAN_NUMBER[romans[i] + romans[next]] : undefined;
    if (number) {
      numbers.push(number);
      i++;
    } else {
      numbers.push(ROMAN_NUMBER[romans[i]]);
    }
  }

  return numbers.reduce((acc, number) => {
    return acc + number;
  });
};