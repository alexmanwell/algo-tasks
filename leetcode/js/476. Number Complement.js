// https://leetcode.com/problems/number-complement

const inverseBinaryDigit = binary => {
  let digits = "";
  for (let i = 0; i < binary.length; i++) {
    digits += binary[i] === "1" ? "0" : "1";
  }

  return digits;
};

const convertToDecimal = (binary) => {
  const arr = binary.split("").reverse();
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    number += Math.pow(2, i) * arr[i];
  }

  return number;
};

/**
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
  return convertToDecimal(inverseBinaryDigit(num.toString(2)));
};