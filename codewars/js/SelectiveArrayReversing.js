// https://www.codewars.com/kata/58f6000bc0ec6451960000fd

const selReverse = (arr, length) => {
  if (length === 0) {
    return arr;
  }
  let list = new Array(Math.ceil(arr.length / length));
  let shift = 0;
  for (let i = 0; i < list.length; i++) {
    list[i] = arr.slice(shift, shift + length).reverse();
    shift += length;
  }

  return list.flat();
};