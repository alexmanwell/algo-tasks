// https://www.codewars.com/kata/5873b2010565844b9100026d

const oneTwoThree = (n) => {
  let result = "";
  let sum = n;
  while (sum > 9) {
    sum -= 9;
    result += "9";
  }
  result += sum;

  return [result, n === 0 ? "0" : "1".repeat(n)];
};