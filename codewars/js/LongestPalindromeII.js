// https://www.codewars.com/kata/5a0178f66f793bc5b0001728

const longestPalindrome = (str) => {
  const arr = str.match(/[a-zA-Z\d]/g).map(c => c.toLowerCase());
  let obj = {};
  let max = 0;
  for (let char of arr) {
    obj[char] = (obj[char] || 0) + 1;
    if (obj[char] % 2 === 0) {
      max += 2;
    }
  }

  return arr.length > max ? max + 1 : max;
};