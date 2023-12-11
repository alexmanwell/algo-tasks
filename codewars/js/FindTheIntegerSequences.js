// https://www.codewars.com/kata/582aad136755daf91a000021
// TODO: I think this task has several solutions.
//  Another solution can be in search average value for every set values from 2, 3, 4..., n elements.

const findSequences = (n) => {
  const max = Math.ceil(n / 2);
  let index = 1;
  let result = [];
  while (index <= max) {
    let sequence = [];
    let sum = 0;
    for (let i = index; i < Infinity; i++) {
      if (sum === n) {
        result.unshift(sequence);
        break;
      }
      if (sum > n) {
        break;
      }
      sequence.push(i);
      sum += i;
    }
    index++;
  }

  return n === 1 ? [] : result;
};