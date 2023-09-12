// https://www.codewars.com/kata/515f51d438015969f7000013

const pyramid = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    const row = new Array(i + 1).fill(1);
    result.push(row);
  }

  return result;
};