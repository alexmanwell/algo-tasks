// https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69

const hamming = (a,b) => {
  const min = Math.min(a.length, b.length);
  let distance = 0;
  for (let i = 0; i < min; i++) {
    if (a.charAt(i) !== b.charAt(i)) {
      distance++;
    }
  }

  const max = Math.max(a.length, b.length);
  return distance + max - min;
};