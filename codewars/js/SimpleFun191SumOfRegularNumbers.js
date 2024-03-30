// https://www.codewars.com/kata/58c20c8d61aefc518f0000fd

const sumOfRegularNumbers = (arr) => {
  let sequences = [];
  let index = 0;
  while (index < arr.length - 1) {
    let count = 1;
    let start = index;
    const diff = arr[index + 1] - arr[index];
    while (arr[index + 1] - arr[index] === diff) {
      index++;
      count++;
    }
    if (count >= 3) {
      sequences.push(arr.slice(start, index + 1));
    }
  }

  return sequences
    .map(arr => arr.reduce((acc, n) => acc + n, 0))
    .reduce((acc, n) => acc + n, 0);
};