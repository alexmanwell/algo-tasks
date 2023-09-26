// https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2

const validate = (n) => {
  let digits = n.toString().split("").map(Number);
  digits = (digits.length % 2 === 0)
    ? digits.map((digit, index) => (((index % 2 === 0) ? digit = digit * 2 : digit) > 9) ? digit - 9 : digit)
    : digits.map((digit, index) => (((index % 2 === 1) ? digit = digit * 2 : digit) > 9) ? digit - 9 : digit);

  return digits.reduce((acc, digit) => acc + digit, 0) % 10 === 0;
};