// https://www.codewars.com/kata/5274e122fc75c0943d000148

const VALUE_COMMA = 3;

const amountCommas = (length, divide) => {
  const commas = parseInt(length / divide);
  return (length % divide !== 0) ? commas : commas - 1;
};

const groupByCommas = (n) => {
  const digits = n.toString().split("").map(String);
  const length = digits.length;
  const result = new Array(length + amountCommas(length, VALUE_COMMA));
  let j = result.length - 1;
  let count = j - VALUE_COMMA;
  for (let i = length - 1; i >= 0; i--) {
    result[j] = digits[i];
    if (j === count) {
      result[j] = ",";
      count = j - VALUE_COMMA - 1;
      i++;
    }
    j--;
  }

  return result.join("");
};