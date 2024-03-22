// https://www.codewars.com/kata/65d2460f512ea70058594a3d

const arrToMap = (arr) => {
  let map = new Map();
  for (const letter of arr) {
    map.set(letter, map.has(letter) ? map.get(letter) + 1 : 1);
  }

  return map;
};

const isUniqueItems = (arr) => {
  return arr.every(item =>
    arr.indexOf(item) === arr.lastIndexOf(item)
  );
};

const isSameItems = (arr, value = arr[0]) => {
  return arr.every(item => item === value)
};

const lastNonEmptyString = (str) => {
  const letters = [...str];
  if (isUniqueItems(letters)) {
    return str;
  }
  let map = arrToMap(letters);
  while (!isSameItems([...map.values()])) {
    const min = Math.min(...map.values());
    for (const [letter, amount] of map.entries()) {
      map.set(letter, amount - min);
    }
    for (const [letter, amount] of map.entries()) {
      if (amount === 0) {
        map.delete(letter);
      }
    }
    const isSame = isSameItems([...map.values()], 1);
    if (map.size === 1 || isSame) {
      break;
    }
  }
  let result = [];
  for (const letter of [...map.keys()]) {
    const index = letters.lastIndexOf(letter);
    result.push([letter, index]);
  }

  return result
    .sort(([l1, i1], [l2, i2]) =>
      i1 - i2
    )
    .map(([l, _]) => l)
    .join("");
};