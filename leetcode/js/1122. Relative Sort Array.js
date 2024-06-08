// https://leetcode.com/problems/relative-sort-array

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = (arr1, arr2) => {
  let sortedList = [];
  for (const n of arr2) {
    let index = -1;
    index = arr1.indexOf(n, index + 1);
    while (index !== -1) {
      arr1[index] = null;
      sortedList.push(n);
      index = arr1.indexOf(n, index + 1);
    }
  }

  return [
    ...sortedList,
    ...arr1.filter(item => item !== null).sort((a, b) => a - b)
  ];
};