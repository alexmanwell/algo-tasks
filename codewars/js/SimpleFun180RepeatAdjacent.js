// https://www.codewars.com/kata/58b8dccecf49e57a5a00000e

const repeatAdjacent = (s) => {
  const arr = s.split("");
  let group = [];
  let result = [];
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    while (arr[i] === arr[i + 1] && i < length) {
      let line = [];
      while (arr[i] === arr[i + 1] && i < length) {
        line.push(arr[i]);
        i++;
      }
      i++;
      group.push(line);
    }
    if (group.length > 1) {
      result.push(group);
    }
    group = [];
  }

  return result.length;
};