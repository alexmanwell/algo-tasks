// https://www.codewars.com/kata/55de6173a8fbe814ee000061

const unusedDigits = (...arr) => {
  const str = arr.join("");
  let numbers = [];
  for (let digit = 0; digit <= 9; digit++) {
    if (!str.includes(digit)) {
      numbers.push(digit);
    }
  }
  return numbers.join("");
};