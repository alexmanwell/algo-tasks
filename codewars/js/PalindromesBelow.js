// https://www.codewars.com/kata/530d0298e09e54a3620006c2

const isPalindrome = (s) => {
  return s === s.split("").reverse().join("");
};

Number.prototype.palindromeBelow = function (base) {
  let result = [];
  for (let i = 1; i <= this; i++) {
    const number = i.toString(base);
    if (isPalindrome(number)) {
      result.push(i);
    }
  }

  return result;
};