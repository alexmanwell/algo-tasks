// https://www.codewars.com/kata/598e3859f289bb47ba00000a

const portion = (a, i, n) => {
  a = (i >= 0) ? a : a.reverse();
  i = Math.abs(i);
  const result = a.slice(i, n - i + 2).sort((a, b) => a - b);

  return !result.length ? -1 : result;
};

console.log(portion([1, 2, 3, 4], 1, 2), [2, 3]);
console.log(portion([1, 2, 3, 4], -1, 2), [2, 3]);
console.log(portion([1], 1, 5), -1);