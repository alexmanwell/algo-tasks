// https://www.codewars.com/kata/5613475e4778aab4d600004f

const repeatingFractions = (numerator, denominator) => {
  if (denominator === 0) {
    return undefined;
  }
  if (denominator === 1) {
    return numerator.toString();
  }
  if (numerator === 0) {
    return "0";
  }

  const number = (numerator / denominator).toString().split(".");
  const fractional = number[1];
  if (fractional === undefined) {
    return number.join("");
  }
  let result = number[0] + ".";
  let isSame = false;
  for (let i = 0; i < fractional.length; i++) {
    if (fractional[i] === fractional[i + 1]) {
      isSame = true;
    } else {
      result += isSame ? `(${fractional[i]})` : fractional[i];
      isSame = false;
    }
  }

  return result;
};