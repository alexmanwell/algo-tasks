// https://www.codewars.com/kata/58223370aef9fc03fd000071

const dashatize = (num) => {
  if (Number.isNaN(num) || !Number.isInteger(num)) {
    return NaN.toString();
  }
  if (Math.abs(num) < 10) {
    return Math.abs(num).toString();
  }
  const digits = num.toString().split("").map(Number);
  digits.unshift(Math.abs(digits.shift()));

  const result = [];
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] % 2 === 0 && digits[i + 1] % 2 === 1) {
      result.push(`${digits[i]}-`);
    } else if (digits[i] % 2 === 0) {
      result.push(digits[i]);
    } else if (digits[i] % 2 === 1 && i !== (digits.length - 1)) {
      result.push(`${digits[i]}-`);
    }
  }

  const lastDigit = digits[digits.length - 1];
  result.push(lastDigit % 2 === 1 ? lastDigit : "");

  return result.join("");
};