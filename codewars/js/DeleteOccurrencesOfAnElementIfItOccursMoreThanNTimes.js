// https://www.codewars.com/kata/554ca54ffa7d91b236000023

const deleteNth = (arr, n) => {
  const result = [];
  const set = new Set(arr);
  const map = new Map();
  set.forEach(item => map.set(item, 0));
  arr.forEach(item => {
    if (map.get(item) < n) {
      result.push(item);
      map.set(item, map.get(item) + 1);
    }
  });

  return result;
};

console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));