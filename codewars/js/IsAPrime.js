// https://www.codewars.com/kata/56a194c4bd5032751e000029

const isNumberPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n >= 2;
};

const isPrime = (str) => {
  let candidates = str.toLowerCase().match(/\d+|(prime)/g) || [];
  if (candidates.length === 0) {
    return false;
  }
  if (candidates.includes("isNumberPrime")) {
    return true;
  }

  candidates = candidates.filter(v => (/\d+/g).test(v));
  let isPrime = false;
  for (let i = 0; i < candidates.length; i++) {
    const candidate = +candidates[i];
    isPrime = isNumberPrime(candidate);
    if (isPrime) {
      break;
    }
  }

  return isPrime;
};