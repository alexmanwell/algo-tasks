// https://www.codewars.com/kata/58dace86b809ca6c62000ccf

const hasPair = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    const candidate = sum - arr[i];
    let left = i + 1;
    let right = arr.length - 1;
    while (left <= right) {
      let middle = Math.floor(left + (right - left) / 2);
      if (arr[middle] === candidate) {
        return true;
      }
      if (arr[middle] > candidate) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }

  return false;
};