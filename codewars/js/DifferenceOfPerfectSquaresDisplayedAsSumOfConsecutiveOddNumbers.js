// https://www.codewars.com/kata/6359b10f8f2001f29ccf0db4

const squaresToOdd = (a, b) => {
  const length = a - b;
  const diff = a * a - b * b;
  let average = (diff / length) - (length - 1);
  let list = new Array(length).fill(null);
  let step = 2;
  for (let i = 0; i < length; i++) {
    list[i] = average;
    average += step;
  }

  return `${a}^2 - ${b}^2 = ${list.join(" + ")} = ${diff}`;
};