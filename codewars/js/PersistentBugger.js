// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

const persistence = (num) => {
  let count = 0;
  while (String(num).length !== 1) {
    let digits = String(num).split("");
    num = digits.reduce((acc, digit) => acc * digit, 1);
    count++;
  }

  return count;
};