// https://www.codewars.com/kata/58df8b4d010a9456140000c7

const reverseHalfNumber = (num) => {
  return parseInt(num).toString().split("").reverse().join("");
};

const makePalindrome = (half, reverseHalf) => {
  return Number(half + "" + reverseHalfNumber(reverseHalf))
};

const computeReverseHalfNumber = (n, length) => {
  return length % 2 === 0 ? n : n / 10;
};

const findMinDifferenceValue = (arr, num) => {
  let min = Number.MAX_SAFE_INTEGER;
  for (let n of arr) {
    if (Math.abs(n - num) <= Math.abs(min - num)) {
      min = n;
    }
  }

  return min;
};

const palindrome = (num) => {
  let number = Number(typeof num !== "string" ? num : undefined);
  const numbers = [];
  if (!isNaN(number) && number >= 0) {
    if (number < 10) {
      number = 11;
    }
    const length = number.toString().length;
    const half = parseInt(number / Math.pow(10, Number(Math.floor(length / 2))));
    numbers.push(makePalindrome(half - 1, computeReverseHalfNumber(half - 1, length)));
    numbers.push(makePalindrome(half, computeReverseHalfNumber(half, length)));
    numbers.push(makePalindrome(half + 1, computeReverseHalfNumber(half + 1, length)));
  }

  return (numbers.length > 0)
    ? findMinDifferenceValue(numbers, num)
    : "Not valid";
};