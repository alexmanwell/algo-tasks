// https://www.codewars.com/kata/5511b2f550906349a70004e1

const lastDigit = (str1, str2) => {
  if (str2 === "0") {
    return 1;
  }

  const digit = parseInt(str1.slice(-1));
  const degree = parseInt(str2.slice(-2));
  if (digit === 0) {
    return 0;
  }
  if ((/[5,6]/).test(digit)) {
    return digit;
  }

  return Math.pow(digit, degree % 4 || 4) % 10;
};