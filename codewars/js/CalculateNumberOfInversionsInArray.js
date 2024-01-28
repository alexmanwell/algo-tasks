// https://www.codewars.com/kata/537529f42993de0e0b00181f

const countInversions = (arr) => {
  const size = arr.length;
  let count = 0;
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }

  return count;
};