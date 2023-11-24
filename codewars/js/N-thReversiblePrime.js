// https://www.codewars.com/kata/5826c14622be6ef2a4000033
// TODO: make solution. But tests don't pass time limit.

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const reverseNumber = (n) => {
  return Number(String(n).split("").reverse().join(""));
};

const reversiblePrime = (n) => {
  let index = -1;
  let prime = -1;
  for (let i = 2; i < Number.MAX_SAFE_INTEGER && index < n; i++) {
    const reversed = reverseNumber(i);
    if (isPrime(i) && isPrime(reversed)) {
      index++;
      prime = i;
    }
  }

  return prime;
};