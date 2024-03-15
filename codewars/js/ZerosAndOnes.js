// https://www.codewars.com/kata/5a00a8b5ffe75f8888000080

const decreasingSort = (map) => {
  return [...map.entries()]
    .sort((a, b) =>
      b[1] - a[1] || b[0] - a[0]
    );
};

const replaceZero = (arr) => {
  let [prev, current, next] = [0, 0, 0];
  let map = new Map();
  const length = arr.lastIndexOf(0);
  while (current <= length) {
    current = arr.indexOf(0, prev);
    if (current === -1) {
      break;
    }
    next = arr.indexOf(0, current + 1);
    if (next === -1) {
      next = arr.length;
    }
    map.set(current, next - prev);
    prev = current + 1;
  }

  return decreasingSort(map)[0][0];
};