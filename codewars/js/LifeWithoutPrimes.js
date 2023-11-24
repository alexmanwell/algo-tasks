// https://www.codewars.com/kata/59f8750ac374cba8f0000033

const checkPrime = (n) => {
  if (n < 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const sequenceWithoutPrimesDigit = (n) => {
  let result = new Array(n);
  result[0] = 1;
  let index = 1;
  for (let i = 2; i <= Number.MAX_SAFE_INTEGER && index <= n; i++) {
    if (!checkPrime(i) && !i.toString().match(new RegExp(/[2,3,5,7]/g))) {
      result[index] = i;
      index++;
    }
  }

  return result;
};

const solve = (n) => {
  const sequence = sequenceWithoutPrimesDigit(n);
  return sequence[sequence.length - 1];
};