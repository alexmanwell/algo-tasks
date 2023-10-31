// https://www.codewars.com/kata/60fb2e158b940b00191e24fb
// TODO:Make better solution. But it solution doesn't pass test amount digits from 1000 to 10000;

const additionStrings = (a, b) => {
  a = a === 0 ? "0" : a === "" ? "0" : a.toString().split("");
  b = b === 0 ? "0" : b === "" ? "0" : b.toString().split("");
  let minLengthArray = a.length <= b.length ? a : b;
  let maxLengthArray = b.length >= a.length ? b : a;
  const diffLength = maxLengthArray.length - minLengthArray.length;
  if (minLengthArray.length < maxLengthArray.length) {
    minLengthArray = [...new Array(diffLength).fill("0"), ...minLengthArray];
  } else {
    maxLengthArray = [...new Array(diffLength).fill("0"), ...maxLengthArray];
  }

  const result = new Array(minLengthArray.length).fill(0);
  let highBit = 0;
  for (let i = minLengthArray.length - 1; i >= 0; i--) {
    let sum = Number(minLengthArray[i]) + Number(maxLengthArray[i]) + highBit;
    if (sum >= 10) {
      sum -= 10;
      highBit = 1;
    } else {
      highBit = 0;
    }
    result[i] = sum;
  }
  if (highBit === 1) {
    result.unshift(1);
  }

  return result.join("");
};

const countDuplicates = (sum, amount) => {
  let result = "";
  sum = additionStrings("1" + "0".repeat(amount - 2), sum);
  for (let i = 0; i < 9; i++) {
    result = additionStrings(result, sum);
  }

  return result;
};

const numberOfDuplicateDigits = (ndigit) => {
  let sum = ndigit >= 2 ? "9" : "";
  for (let i = 3; i <= ndigit; i++) {
    sum = countDuplicates(sum, i);
  }

  return BigInt(sum);
};

console.log(numberOfDuplicateDigits(100), 8999734386011124125230661218677964220373170766547346605504025425038260907509098697817005615300955999n);
console.log(numberOfDuplicateDigits(3), 171n);
console.log(numberOfDuplicateDigits(6), 368559n);
console.log(numberOfDuplicateDigits(2000));
console.log(numberOfDuplicateDigits(9999));