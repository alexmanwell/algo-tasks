// https://www.codewars.com/kata/572f32ed3bd44719f8000a54

const convertToArray = (number) => {
  return number.toString().split("").map(Number);
};

const sumPowDigSeq = (start, n, k) => {
  const sequence = new Array(k);
  sequence[0] = start;
  for (let i = 0; i < k; i++) {
    const digits = convertToArray(start);
    start = 0;
    digits.forEach(digit => {
      start += Math.pow(digit, n);
    });
    sequence[i + 1] = start;
  }

  const result = [sequence[sequence.length - 1]];
  let candidate = sequence[0];
  for (let i = 0; i < sequence.length - 1; i++) {
    const index = sequence.indexOf(candidate, i + 1);
    if (index !== -1) {
      result.unshift(index - i);
      result.unshift(sequence.slice(i, index));
      result.unshift(i);
      break;
    }
    candidate = sequence[i + 1];
  }

  return result;
};