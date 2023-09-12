// https://www.codewars.com/kata/5a9c35e9ba1bb5c54a0001ac

const add = (x, y) => {
  return (y === 0) ? x : add(x ^ y, (x & y) << 1);
};