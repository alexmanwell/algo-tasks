// https://www.codewars.com/kata/589d2bf7dfdef0817e0001aa

const factorSum = (n) => {
  let sum = 0;
  let divider = 2;
  while (n !== 1) {
    if (n % divider === 0) {
      sum += divider;
    } else {
      divider++;
    }
  }
};