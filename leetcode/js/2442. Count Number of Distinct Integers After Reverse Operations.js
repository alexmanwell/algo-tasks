// https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations

const reverseNumber = (n) => {
  return +n
    .toString()
    .split("")
    .reverse()
    .join("");
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const countDistinctIntegers = (nums) => {
  let set = new Set(nums);
  for (const n of nums) {
    set.add(reverseNumber(n));
  }

  return set.size;
};