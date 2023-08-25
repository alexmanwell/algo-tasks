// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

const nextBigger = (n) => {
  const digits = Array.from(String(n), Number);

  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  if (i === -1) {
    return -1;
  }

  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];
  const reversed = digits.splice(i + 1).reverse();
  digits.push(...reversed);

  return parseInt(digits.join(''));
};

// another solution.
const splitDigits = (d) => {
  return String(d).split('')
};

const sortDigits = (d) => {
  return Number(splitDigits(d).sort().join(''))
};

const reverseSortDigits = (d) => {
  return Number(splitDigits(d).sort().reverse().join(''))
};

const nextBigger = (n) => {
  if (n === reverseSortDigits(n)) return -1;

  let nSorted = sortDigits(n);

  while (true) {
    n += 1;
    if (sortDigits(n) === nSorted) return n
  }
};

console.log(nextBigger(534976));