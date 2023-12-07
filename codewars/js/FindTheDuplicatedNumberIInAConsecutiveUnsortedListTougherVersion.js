// https://www.codewars.com/kata/558f0553803bc3c4720000af

const findDup = (arr) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], map.get(arr[i]) ? map.get(arr[i]) + 1 : 1);
  }

  return Array
    .from(map)
    .sort(([k1, v1], [k2, v2]) =>
      v2 - v1
    )[0][0];
};