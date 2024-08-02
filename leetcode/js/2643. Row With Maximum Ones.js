// https://leetcode.com/problems/row-with-maximum-ones

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const rowAndMaximumOnes = (mat) => {
  let index = 0;
  let maxOnes = 0;
  for (let i = 0; i < mat.length; i++) {
    const countOnes = Math.max(mat[i].filter(n => n === 1).length, maxOnes);
    if (countOnes > maxOnes) {
      index = i;
      maxOnes = countOnes;
    }
  }

  return [index, maxOnes];
};