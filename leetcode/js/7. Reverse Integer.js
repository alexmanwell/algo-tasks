// https://leetcode.com/problems/reverse-integer

const isInteger = (n) => {
  const MIN_INTEGER_VALUE = -(2 ** 31);
  const MAX_INTEGER_VALUE = 2 ** 31 - 1;
  return (n >= MIN_INTEGER_VALUE) && (n <= MAX_INTEGER_VALUE);
};

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let arr = x.toString().split("");
  const isNegative = arr[0] === "-";
  if (!isNegative) {
    arr.reverse();
  } else {
    arr = arr.slice(1).reverse();
    arr.unshift("-")
  }

  const number = +arr.join("");
  return isInteger(number) ? number : 0;
};