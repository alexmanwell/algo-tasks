// https://www.codewars.com/kata/583c5469977933319f000403

const maxAndMin = (arr1, arr2) => {
  let values = new Array(arr1.length * arr2.length);
  let index = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      values[index] = Math.abs(arr2[j] - arr1[i]);
      index++;
    }
  }

  return [Math.max(...values), Math.min(...values)];
};