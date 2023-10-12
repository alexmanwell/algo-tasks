// https://www.codewars.com/kata/589d2bf7dfdef0817e0001aa

const isPrime = (n) => {
  let result = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result = false;
      break;
    }
  }

  return result;
};

const factorSum = (number) => {
  if (number > 5) {
    while (!isPrime(number)) {
      let sum = 0;
      let index = 2;
      while (index <= number) {
        if (number % index === 0) {
          sum += index;
          number /= index;
        } else {
          index++;
        }
      }
      number = sum;
    }
  }

  return number;
};

console.log(factorSum(156));
console.log(factorSum(31));
console.log(factorSum(4));