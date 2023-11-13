// https://www.codewars.com/kata/59e66e48fc3c499ec5000103
// TODO: done this problem, but I have already written code when I really want to sleep.

const solve = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = [...new Set(arr[i])];
  }
  let indexes = new Array(arr.length).fill(0);
  let index = 0;
  const result = [];
  let sequence = [];

  while (index < arr.length) {
    const position = indexes[index];
    sequence.push(arr[index][position]);
    index++;
    if (index === arr.length - 1) {
      for (let i = 0; i < arr[index].length; i++) {
        result.push([...sequence, arr[index][i]]);
      }
      sequence = sequence.slice(0, sequence.length - 1);
      index--;
      indexes[index] += 1;
    }
    while (indexes[index] === arr[index].length) {
      sequence = sequence.slice(0, sequence.length - 1);
      indexes[index] = 0;
      index--;
      if (index <= 0) {
        indexes[index] += 1;
        break;
      }
      indexes[index] += 1;
    }
    if (arr[0].length === indexes[0] || index < 0) {
      break;
    }
  }

  return result.length;
};