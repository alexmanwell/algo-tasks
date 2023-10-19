// https://www.codewars.com/kata/5782dd86202c0e43410001f6

const OPERATION = "+-*/";

const calculate = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a / b,
];

const doMath = (str) => {
  const expression = /[a-z]/;
  const sequence = str
    .split(" ")
    .sort((a, b) => {
      a = a[a.search(expression)];
      b = b[b.search(expression)];
      return a.localeCompare(b);
    })
    .map(item => {
      const index = item.search(expression);
      const split = item.split("");
      return [
        ...split.slice(0, index),
        ...split.slice(index + 1)
      ].join("");
    })
    .map(Number);

  return Math.round(
    sequence.reduce((acc, item, index) =>
        calculate[index % OPERATION.length](acc, item),
      sequence.shift()
    ));
};