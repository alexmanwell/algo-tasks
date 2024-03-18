// https://www.codewars.com/kata/5276c18121e20900c0000235

const findNumber = (arr) => {
  const n = arr.length + 1;
  return (1 + n) * n / 2 - arr.reduce((acc, n) => acc + n, 0);
};