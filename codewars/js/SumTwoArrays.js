// https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6

const addArrays = (array1, array2) => {
  let n1 = parseInt(array1.join('')) || 0;
  let n2 = parseInt(array2.join('')) || 0;

  return n1 === 0 && n2 === 0
    ? []
    : (n1 + n2).toString().match(/^-\d|\d/g).map(Number);
};