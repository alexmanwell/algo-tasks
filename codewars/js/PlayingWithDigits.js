// https://www.codewars.com/kata/5552101f47fc5178b1000050

const digPow = (n, p) => {
  const sum = n.toString().split("").map(Number).reduce((acc, digit, index) => {
    return acc + Math.pow(digit, p + index);
  }, 0) / n;

  return (Number.isInteger(sum)) ? sum : -1;
};