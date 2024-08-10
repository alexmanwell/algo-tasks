// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix

/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = (grid) => {
  return grid
    .reduce((acc, arr) =>
        acc + arr.filter(n => n < 0).length
      , 0
    );
};