// https://leetcode.com/problems/find-resultant-array-after-removing-anagrams

const sorted = (word) => {
  return word
    .split("")
    .sort((a, b) =>
      a.localeCompare(b)
    );
};

const compareArrays = (arr1, arr2) => {
  const size = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < size; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

/**
 * @param {string[]} words
 * @return {string[]}
 */
const removeAnagrams = (words) => {
  for (let i = 0; i < words.length - 1; i++) {
    const sortedWordA = sorted(words[i]);
    const sortedWordB = sorted(words[i + 1]);
    if (compareArrays(sortedWordA, sortedWordB)) {
      words[i + 1] = undefined;
      words = words.filter(word => word !== undefined);
      i = -1;
    }
  }

  return words;
};