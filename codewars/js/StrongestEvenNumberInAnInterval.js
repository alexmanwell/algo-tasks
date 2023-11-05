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

// second solution. Better than previous solution.
function strongestEven(n, m) {
  let maxStrongness = 0;
  let i = n;
  let f = m;
  while (f > i) {
    i = i % 2 === 0 ? i / 2 : (i + 1) / 2;
    f = f % 2 === 0 ? f / 2 : (f - 1) / 2;
    maxStrongness++
  }
  return i * 2 ** maxStrongness;
}