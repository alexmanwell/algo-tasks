// https://www.codewars.com/kata/5aeed69804a92621a7000077

const RANGE = {
  min: 1,
  max: 50
};

const sort = (array, n) => {
  const sorted = [];
  let size = n;
  for (let i = RANGE.min; i < RANGE.max && size >= 0; i++) {
    const temp = array.filter(v => v === i);
    size -= temp.length;
    if (size >= 0) {
      sorted.push(...temp);
    } else {
      sorted.push(...temp.slice(0, size));
    }
  }

  return sorted
};

const performantSmallest = (array, n) => {
  const sorted = sort(array, n);
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