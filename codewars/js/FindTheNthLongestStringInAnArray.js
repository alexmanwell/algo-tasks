// https://www.codewars.com/kata/5594c4599934000e1e00002e

const sortByLengths = (map) => {
  return [...map.entries()]
    .sort(([k1, v1], [k2, v2]) => k2 - k1);
}

const longest = (arr, n) => {
  let map = new Map();
  for (let item of arr) {
    const length = item.length;
    map.set(length, map.has(length) ? [...map.get(length), item] : [item]);
  }

  const sorted = sortByLengths(map);
  let count = 0;
  let result = "";
  for (let [k, items] of sorted) {
    for (let item of items) {
      ++count;
      if (count === n) {
        result = item;
        break;
      }
    }
    if (result.length) {
      break;
    }
  }

  return result;
};