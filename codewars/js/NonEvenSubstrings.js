// https://www.codewars.com/kata/59da47fa27ee00a8b90000b4

const solve = (s) => {
  let size = 0;
  const result = [];
  for (let i = 0; i <= s.length; i++) {
    const digits = s.substring(i, i + 1 + size);
    const lastDigit = +digits.charAt(digits.length - 1);
    if (lastDigit % 2 !== 0) {
      result.push(digits);
    }
    if (i + size === s.length - 1) {
      i = -1;
      size++;
    }
    if (size === s.length) {
      break;
    }
  }

  return result.length;
};