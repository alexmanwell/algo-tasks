// https://www.codewars.com/kata/5612ab201830eb000f0000c0

const countDivisors = (n) => {
  let divisors = new Set();
  divisors.add(1);
  let index = 2;
  let number = n;
  while (n !== 1) {
    if (number % index === 0) {
      divisors.add(index).add(n);
      n = number / index;
    }
    index++;
  }

  return divisors.size;
};

const findMinNum = (num) => {
  let result = 0;
  for (let i = 2; i < Infinity; i++) {
    if (countDivisors(i) === num) {
      result = i;
      break;
    }
  }

  return result;
};