// https://www.codewars.com/kata/54554526126a00dbc2000823

const sumUpNoAdjacents = (arr, n) => {
  if (n === 0) {
    return true;
  }
  if (arr.includes(n)) {
    return true;
  }

  let index = 0;
  while (index < arr.length) {
    while (arr[index] > n) {
      index++;
    }
    let j = index;
    let candidate = n;
    let canNextIndex = false;
    while (j < arr.length) {
      if (candidate - arr[j] > 0) {
        candidate -= arr[j];
        if (canNextIndex) {
          j++;
          canNextIndex = false;
        } else {
          j += 2;
        }
        if (arr.includes(candidate, j + 1)) {
          return true;
        }
      } else if (candidate - arr[j] < 0) {
        canNextIndex = true;
        j++;
      } else {
        return true;
      }
    }
    index++;
    candidate = n;
  }

  return false;
};