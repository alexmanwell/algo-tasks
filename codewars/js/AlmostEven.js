// https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b

/**
 * Returns a [parts]-length array of equal or nearly equal
 * integers that add up to [num].
 */
const splitInteger = (num, parts) => {
  const digits = new Array(parts).fill(parseInt(num / parts));
  let sum = digits.reduce((acc, digit) => acc + digit, 0);
  while (sum !== num) {
    const digit = digits.shift();
    digits.push(digit + 1);
    sum = digits.reduce((acc, digit) => acc + digit, 0);
  }

  return digits;
};

// second solutions.
const splitInteger = (num, parts) => {
  const remainder = num % parts;
  const int = Math.floor(num / parts);

  return [
    ...new Array(parts - remainder).fill(int),
    ...new Array(remainder).fill(int + 1)
  ];
};