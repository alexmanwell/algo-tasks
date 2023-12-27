// https://www.codewars.com/kata/58cda88814e65627c5000045

const expandedForm = (num) => {
  const [number, decimal] = num.toString().split(".");
  const numbers = number.split("").map(Number);
  const decimals = decimal.split("").map(Number);
  let result = [];
  const length = numbers.length;
  numbers.forEach((n, i) => {
    if (n !== 0) {
      result.push((n * 10 ** (length - 1 - i)));
    }
  });
  decimals.forEach((d, i) => {
    if (d !== 0) {
      result.push(`${d}/${10 ** (i + 1)}`);
    }
  });

  return result.join(" + ");
};