// https://www.codewars.com/kata/58fea5baf3dff03a6e000102

const factDigits = (n) => {
  return n === 0 || n === 1
    ? 1
    : Math.ceil(
      Math.log10(2 * Math.PI * n) / 2
      + n * (Math.log10(n / Math.E))
    );
};