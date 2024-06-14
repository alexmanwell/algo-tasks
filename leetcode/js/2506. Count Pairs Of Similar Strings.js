// https://leetcode.com/problems/count-pairs-of-similar-strings

const compareArrays = (arr, arr2) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

/**
 * @param {string[]} words
 * @return {number}
 */
const similarPairs = (words) => {
  const list = words
    .map(word => [...new Set(word)].sort((a, b) => a.localeCompare(b)))
    .sort((a, b) => a.length - b.length);
  
  let count = 0;
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i].length !== list[j].length) {
        break;
      }
      if (compareArrays(list[i], list[j])) {
        ++count;
      }
    }
  }

  return count;
};