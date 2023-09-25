// https://www.codewars.com/kata/5626b561280a42ecc50000d1

const sumDigitalPower = (number) => {
  let sum = 0;
  const digits = String(number).split("").map(Number);
  digits.forEach((digit, index) => {
    sum += Math.pow(digit, index + 1);
  });

  return sum;
};

const sumDigPow = (a, b) => {
  const result = [];
  for (let i = a; i <= b; i++) {
    if (i === sumDigitalPower(i)) {
      result.push(i);
    }
  }

  return result;
};