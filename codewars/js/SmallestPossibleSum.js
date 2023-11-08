// https://www.codewars.com/kata/52f677797c461daaf7000740

const findMinValue = (numbers) => {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < numbers.length; i++) {
    if (min > numbers[i] && numbers[i] !== 1) {
      min = numbers[i];
    }
  }

  return min;
};

const isSameValues = (numbers) => {
  const value = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== value) {
      return false;
    }
  }

  return true;
};

const solution = (numbers) => {
  if (numbers.find(n => n === 1)) {
    return numbers.length;
  }
  if (isSameValues(numbers)) {
    return numbers[0] * numbers.length;
  }

  while (!isSameValues(numbers)) {
    let min = findMinValue(numbers);
    for (let i = 0; i < numbers.length; i++) {
      const value = numbers[i];
      if (value % min !== 0) {
        numbers[i] = value % min;
      }
      if (value !== min && value % min === 0) {
        numbers[i] = min;
      }
      if (value !== min && min % value === 0) {
        const index = numbers.indexOf(min);
        numbers[index] = value;
        min = numbers[index];
        i = 0;
      }
    }
  }

  return numbers[0] * numbers.length;
};