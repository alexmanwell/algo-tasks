// https://leetcode.com/problems/pascals-triangle-ii

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
  let triangles = new Array(rowIndex).fill(null);
  for (let i = 0; i <= rowIndex; i++) {
    let triangle = new Array(i).fill(1);
    for (let j = 0; j < triangle.length; j++) {
      triangle[j] = (triangles[i - 1][j - 1] || 0) + (triangles[i - 1][j] || 1);
    }
    triangle[triangle.length] = 1;
    triangles[i] = triangle;
  }

  return triangles[triangles.length - 1];
};