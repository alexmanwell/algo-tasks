// https://www.codewars.com/kata/5884b6550785f7c58f000047

const group = (arr) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    map.set(value,
      map.get(value)
        ? [...map.get(value), value]
        : [value]
    );
  }

  return Array.from(map.values());
};