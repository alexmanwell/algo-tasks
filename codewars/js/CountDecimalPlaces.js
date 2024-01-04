// https://www.codewars.com/kata/529cd9c409a361b676000021

const amountIntDigits = (n) => {
  return Number
    .parseInt(n)
    .toString()
    .length;
};

const decimalPart = (n) => {
  return n
    .toString()
    .substring(amountIntDigits(n));
};

const decimalPlaces = (n) => {
  const decimal = decimalPart(n);
  let count = 0;
  for (let c of decimal) {
    if (/e/.test(c)) {
      const index = decimal.indexOf(c);
      count += Math.abs(+decimal.slice(index + 1));
      break;
    }
    if ((/\d/).test(c)) {
      count++;
    }
  }

  return count;
};