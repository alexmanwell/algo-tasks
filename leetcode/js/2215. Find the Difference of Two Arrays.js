// https://leetcode.com/problems/find-the-difference-of-two-arrays/description/

const uniques = (set, intersections) => {
  return Array.from(set).filter((elem) => {
    return !intersections.includes(elem)
  });
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = (nums1, nums2) => {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const intersections = [];
  for (let elem of set2) {
    if (set2.has(elem) && set1.has(elem)) {
      intersections.push(elem);
    }
  }

  return [uniques(set1, intersections), uniques(set2, intersections)];
};