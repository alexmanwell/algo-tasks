// https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers

const isValidNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return false;
    }
  }

  return true;
};

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const checkValid = (matrix) => {
  const size = matrix.length;
  for (let i = 0; i < size; i++) {
    const row = [...matrix[i]].sort((a, b) => a - b);
    if (!isValidNumbers(row)) {
      return false;
    }
    const col = (matrix, col) => {
      let arr = [];
      for (let i = 0; i < size; i++) {
        arr.push(matrix[i][col]);
      }

      return arr.sort((a, b) => a - b);
    }
    const arr1 = col(matrix, i);
    if (!isValidNumbers(arr1)) {
      return false;
    }
  }

  return true;
};