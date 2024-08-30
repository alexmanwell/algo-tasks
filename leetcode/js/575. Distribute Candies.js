// https://leetcode.com/problems/distribute-candies

/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = (candyType) => {
  return Math.min(
    new Set(candyType).size,
    candyType.length / 2
  );
};