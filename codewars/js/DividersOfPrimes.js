// https://www.codewars.com/kata/64600b4bbc880643faa343d1
// TODO: Combinatorics task.

const generateSequences = (arr) => {
  let sequence = new Array(arr.length).fill(0);
  let sequences = [[...sequence]];
  let index = 0;
  while (index < arr.length) {
    while (sequence[index] < arr[index]) {
      sequence[index] = sequence[index] + 1;
      sequences.push([...sequence]);
    }
    if (sequence[index] === arr[index]) {
      index++;
    }
    if (sequence[index] < arr[index]) {
      sequence[index] = sequence[index] + 1;
      for (let i = 0; i < index; i++) {
        sequence[i] = 0;
      }
      sequences.push([...sequence]);
      index = 0;
    }
  }

  return sequences;
};

const getDividers = (values, powers) => {
  return generateSequences(powers)
    .map((sequence) => {
      return sequence.reduce((acc, pow, index) => {
        return acc * values[index] ** pow
      }, 1);
    })
    .sort((a, b) => a - b);
};