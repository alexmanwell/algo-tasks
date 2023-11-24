// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc

const solve = (arr) => {
  const map = arr.reduce((a, b) => a[b] = a[b] + 1 || 1, {});
  return arr.sort((a, b) => map[b] - map[a] || a - b);
};