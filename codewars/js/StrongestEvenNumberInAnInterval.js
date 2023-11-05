// https://www.codewars.com/kata/5d16af632cf48200254a6244

const numbersOfDegree2 = (m) => {
  let number = 2;
  const result = [number];
  while (number <= m) {
    number *= 2;
    result.push(number);
  }

  return result.reverse().slice(1);
};

const strongestEven = (n, m) => {
  const numbers = numbersOfDegree2(m);
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < Number.MAX_SAFE_INTEGER; j++) {
      result = numbers[i] * j;
      if (result >= n && result <= m) {
        break;
      }
      if (result > m) {
        result = 0;
        break;
      }
    }
    if (result !== 0) {
      break
    }
  }

  return result;
};