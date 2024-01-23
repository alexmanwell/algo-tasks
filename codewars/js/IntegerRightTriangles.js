// https://www.codewars.com/kata/562c94ed7549014148000069
// TODO: done this problem. But It doesn't pass the time limit tests.

const integerRightTriangles = (p) => {
  if (p % 2 !== 0) {
    return [];
  }

  let result = [];
  for (let i = p / 6; i < p / 3; i++) {
    for (let j = i + 1; j + i < p; j++) {
      const k = Math.sqrt(i ** 2 + j ** 2);
      if (!Number.isInteger(k)) {
        continue;
      }
      if (i + j + k === p) {
        result.push([i, j, k]);
      }
    }
  }

  return result;
};