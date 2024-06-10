// https://leetcode.com/problems/sort-the-people

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = (names, heights) => {
  let map = new Array(names.length);
  for (let i = 0; i < names.length; i++) {
    map[i] = [names[i], heights[i]];
  }

  return map
    .sort(([k1, v1], [k2, v2]) => v2 - v1 || k1.localeCompare(k2))
    .map(([k, v]) => k);
};