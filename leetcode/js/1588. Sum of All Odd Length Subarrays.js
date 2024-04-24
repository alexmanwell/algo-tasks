// https://leetcode.com/problems/sum-of-all-odd-length-subarrays

/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = (arr) => {
  let oddLength = 1;
  let arrays = [];
  let i = 0;
  let j = 0;
  while (oddLength <= arr.length) {
    let subArray = [];
    while (subArray.length < oddLength) {
      subArray.push(arr[i]);
      i++;
    }
    j++;
    i = j;
    arrays.push(subArray);
    if (i + oddLength === arr.length + 1) {
      oddLength += 2;
      i = 0;
      j = 0;
    }
  }

  return arrays
    .map(arr =>
      arr.reduce((a, b) => a + b)
    )
    .reduce((a, b) => a + b);
};