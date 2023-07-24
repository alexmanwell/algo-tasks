// https://leetcode.com/problems/chunk-array/description/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
const chunk = (arr, size) => {
  if (arr.length === 0) {
    return [];
  }
  if (arr.length < size) {
    return [arr];
  }

  const chunks = [];
  let chunk = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    chunk.push(arr[i]);
    count++;
    if (count === size) {
      chunks.push(chunk);
      chunk = [];
      count = 0;
    }
    if (chunk.length !== 0 && count < size && i === arr.length - 1) {
      chunks.push(chunk);
    }
  }

  return chunks;
};