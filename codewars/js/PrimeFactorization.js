// https://www.codewars.com/kata/534a0c100d03ad9772000539

function PrimeFactorizer(n) {
  let factors = {};
  let index = 2;
  while (n > 1) {
    while (n % index === 0) {
      factors[index] = factors[index] ? factors[index] + 1 : 1;
      n /= index;
    }
    if (n % index !== 0) {
      index++;
    }
  }

  return {factor: factors};
}