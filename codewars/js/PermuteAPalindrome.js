// https://www.codewars.com/kata/58ae6ae22c3aaafc58000079

const permuteAPalindrome = (input) => {
  const map = new Map();
  const symbols = input.split("");
  for (let i = 0; i < symbols.length; i++) {
    const char = symbols[i];
    map.set(char, map.has(char) ? map.get(char) + 1 : 1);
  }

  let isPalindrome = true;
  if (input.length % 2 === 0) {
    for (let amount of map.values()) {
      if (amount % 2 !== 0) {
        isPalindrome = false;
        break;
      }
    }
  } else {
    let countOdd = 0;
    for (let amount of map.values()) {
      if (amount % 2 === 1) {
        countOdd++;
      }
      if (countOdd > 1) {
        isPalindrome = false;
        break;
      }
    }
  }

  return isPalindrome;
};