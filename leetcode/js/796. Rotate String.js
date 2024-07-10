// https://leetcode.com/problems/rotate-string

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = (s, goal) => {
  return s.length === goal.length
    ? String(goal + goal).includes(s)
    : false;
};