// https://www.codewars.com/kata/5aec1ed7de4c7f3517000079

const compare = (a, b) => a - b;

const firstNSmallest = (array, n) => {
  const sorted = [...array].sort(compare).slice(0, n);
  let result = new Array(array.length).fill(null);
  let index = 0;
  const size = sorted.length - 1;
  for (let i = 0; i < size; i++) {
    const findIndex = array.indexOf(sorted[i], index);
    result[findIndex] = sorted[i];
    index = sorted[i] !== sorted[i + 1] ? 0 : findIndex + 1;
  }
  const findIndex = array.indexOf(sorted[size], index);
  result[findIndex] = sorted[size];

  return result.filter(n => n !== null);
};