// https://www.codewars.com/kata/58a3c836623e8c72eb000188

const nextIndex = (arr, number, index) => {
  while (arr.indexOf(number, index + 1) === index + 1) {
    index++;
  }
  return index;
}

const arrayEqualization = (arr, k) => {
  let numbers = new Set(arr);
  let result = [];
  for (let number of numbers) {
    let index = arr.indexOf(number);
    let count = 0;
    if (index !== 0) {
      count = Math.ceil((index) / k);
      index = count * k - 1;
    }
    index = nextIndex(arr, number, index);
    while (index < arr.length) {
      if (index === arr.length - 1) {
        break;
      }
      index = index + k;
      count++;
      index = nextIndex(arr, number, index);
    }
    result.push(count);
  }

  return Math.min(...result);
};