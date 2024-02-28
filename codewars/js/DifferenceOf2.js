// https://www.codewars.com/kata/5340298112fa30e786000688

const twosDifference = (arr) => {
  return arr
    .sort((a, b) => a - b)
    .filter(n =>
      arr.indexOf(n + 2) !== -1
    )
    .reduce((arr, n) => {
      arr.push([n, n + 2]);
      return arr;
    }, []);
};