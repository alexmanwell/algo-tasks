// https://www.codewars.com/kata/591404294ef3051cbe000035

const generateTriangularSequence = (n) => {
  let sequence = [];
  let item = 1;
  let t = 1;
  while (item < n) {
    item = (t) * (t + 1) / 2;
    t++;
    sequence.push(item);
  }

  return sequence;
};

const triangularSum = (n) => {
  const sequence = generateTriangularSequence(n);
  for (let i = sequence.length - 1; i >= 0; i--) {
    const diff = n - sequence[i] ** 2;
    if (sequence.includes(Math.sqrt(diff))) {
      return true;
    }
  }

  return false;
};