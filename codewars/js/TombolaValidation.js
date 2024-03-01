// https://www.codewars.com/kata/5898a751b2edc082f60005f4

const checkRange = (arr) => {
  return arr
    .includes((n, i) =>
      i * 10 < n
      && n < (i + 1) * 10
      || n === 0
    )
};

const check_tombola = (arr) => {
  if (arr.length !== 3) {
    return false;
  }
  for (let row of arr) {
    if (row.length !== 9) {
      return false;
    }
    if (row.filter(n => n !== 0).length !== 5) {
      return false;
    }
    if (checkRange(arr)) {
      return false;
    }
  }

  for (let col = 0; col < arr[0].length; col++) {
    let temp = [];
    for (let row = 0; row < arr.length; row++) {
      if (arr[row][col] !== 0) {
        temp.push(arr[row][col]);
      }
    }
    if (!temp.length) {
      return false;
    }
    for (let i = 0; i < temp.length - 1; i++) {
      if (temp[i] >= temp[i + 1]) {
        return false;
      }
    }
  }

  return true;
};