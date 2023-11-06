// https://www.codewars.com/kata/5894318275f2c75695000146

const deleteDigit = (n) => {
  const digits = n.toString().split("");
  let result = 0;
  for (let i = 0; i < digits.length; i++) {
    let subDigits = digits.slice(i + 1);
    subDigits = (i !== 0) ? [...digits.slice(0, i), ...subDigits] : subDigits;
    result = Math.max(+subDigits.join(""), result);
  }

  return result;
};