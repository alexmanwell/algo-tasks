// https://www.codewars.com/kata/588c0a38b7cd14085300003f

const listOfDivisors = (n) => {
  let divisors = new Set();
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

const divNum = (a, b) => {
  if (a === 0 || b === 0) {
    return 0;
  }
  if (a > b) {
    throw new Error("Failed input data.");
  }

  let candidate = 0;
  let result = 0;
  for (let i = a; i <= b; i++) {
    const size = listOfDivisors(i);
    if (size > candidate) {
      candidate = size;
      result = i;
    }
  }

  return result;
};