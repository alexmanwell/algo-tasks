// https://www.codewars.com/kata/589d581680458f695200008e

const sumOrProduct = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }

  arr = arr.sort((a, b) => a - b);
  if (arr.every(n => n === 1)) {
    let length = arr.length;
    let amountOfThrees = Math.floor(arr.length / 3);
    if (length - 3 * amountOfThrees === 1) {
      length -= 3 * (amountOfThrees - 1);
      arr = new Array(amountOfThrees - 1).fill(3);
    } else {
      length -= 3 * amountOfThrees;
      arr = new Array(amountOfThrees).fill(3);
    }
    if (length !== 0) {
      arr.unshift(length);
    }
  } else {
    while (arr.find((n) => n === 1)) {
      const a = arr.shift();
      let index = 0;
      if (arr.indexOf(2) !== -1) {
        index = arr.indexOf(2);
      } else if (arr[0] === 1) {
        index = arr.lastIndexOf(1);
      }
      arr[index] += a;
    }
  }

  return arr.reduce((acc, n) => acc * n, 1);
};

// Best solution
const sumOrProduct = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  arr = arr.sort();
  if (arr[0] === 1) {
    if (arr.indexOf(2) === -1) {
      arr.push(arr.shift() + arr.shift());
    } else {
      arr.push(arr.shift() + arr.splice(arr.indexOf(2), 1)[0]);
    }
  } else {
    arr.push(arr.shift() * arr.shift());
  }

  return sumOrProduct(arr);
};