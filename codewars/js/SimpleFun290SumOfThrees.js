// https://www.codewars.com/kata/591d3375e51f4a0940000052

const sumOfThrees = (n) => {
  let degrees = [];
  while (n > 0) {
    let temp = n;
    let count = -1;
    while (temp > 0) {
      temp = Math.floor(temp / 3);
      count++;
    }
    n -= Math.pow(3, count);
    degrees.push(count);
  }
  if (new Set(degrees).size !== degrees.length) {
    return "Impossible"
  }

  return degrees.map(v => `3^${v}`).join("+");
};