// https://www.codewars.com/kata/58e09234ca6895c7b300008c

const reverseHalfNumber = (num) => {
  return parseInt(num).toString().split("").reverse().join("");
};

const makePalindrome = (half, reverseHalf) => {
  return Number(half + "" + reverseHalfNumber(reverseHalf))
};

const computeHalfParticle = (number, length, nextLength) => {
  return length - nextLength === 0
    ? number : length - nextLength < 0
      ? parseInt(number / Math.pow(10, Math.ceil((nextLength - length) / 2)))
      : number;
};

const palindrome = (num, s) => {
  let number = Number(num);
  let result = new Set();
  if (!isNaN(number) && number >= 0 && typeof s !== "string") {
    if (number < 10) {
      number = 11;
    }
    while (result.size < s + 1) {
      const length = number.toString().length;
      const halfNumber = parseInt(number / Math.pow(10, Number(Math.floor(length / 2))));
      const candidate = makePalindrome(halfNumber, length % 2 === 0 ? halfNumber : halfNumber / 10);
      result.add(candidate);

      const nextHalfNumber = halfNumber + 1;
      const nextLength = nextHalfNumber.toString().length * 2;
      number = Number(nextHalfNumber + ""
        + reverseHalfNumber(computeHalfParticle(nextHalfNumber, length, nextLength)));
    }
  }

  return (result.size > 0)
    ? [...result]
      .filter(n => n >= num)
      .map((n, index) => (index < s) ? n : null)
      .filter(n => n)
    : "Not valid";
};