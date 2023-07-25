// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  let uniqueNumbers = new Set();
  for (let number of nums) {
    if (!uniqueNumbers.has(number)) {
      uniqueNumbers.add(number)
    } else {
      return true;
    }
  }

  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));