// https://www.codewars.com/kata/52f677797c461daaf7000740
// TODO: find solutions. Tests pass, but tests don't pass time limit.

const findMin = (numbers) => {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < numbers.length; i++) {
    if (min > numbers[i] && numbers[i] !== 1) {
      min = numbers[i];
    }
  }

  return min;
};

const isSame = (numbers) => {
  const number = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== number) {
      return false;
    }
  }

  return true;
};

const solution = (numbers) => {
  if (numbers.find(n => n === 1)) {
    return numbers.length;
  }
  if (isSame(numbers)) {
    return numbers[0] * numbers.length;
  }

  while (!isSame(numbers)) {
    let min = findMin(numbers);
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % min !== 0) {
        numbers[i] = numbers[i] % min;
      }
      if (numbers[i] !== min && numbers[i] % min === 0) {
        numbers[i] = numbers[i] - min;
      }
      if (numbers[i] !== min && min % numbers[i] === 0) {
        const index = numbers.indexOf(min);
        numbers[index] = min - numbers[i];
        min = numbers[index];
      }
    }
  }

  return numbers.reduce((acc, n) => acc + n);
};