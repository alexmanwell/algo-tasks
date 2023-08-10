// https://www.codewars.com/kata/555b1890a75b930e63000023/train/javascript

const combos = (n) => {
  let count = 1;
  const sequences = [];
  let sequence = [];
  let fills = [];
  while (count <= n) {
    let sum = (sequence.length > 0) ? sequence.reduce((acc, elem) => acc + elem) : 0;
    if (sum < n) {
      fills = new Array(n - sum).fill(1);
      sequence = [...sequence, ...fills];
    }
    if (sum === n) {
      sequences.push([...sequence].reverse());
    }
    if (sum >= n) {
      count = Math.min(...sequence);
      const index = sequence.indexOf(count);
      sequence[index] = ++count;
      sequence = sequence.slice(0, index + 1);
    }
  }

  return sequences;
};