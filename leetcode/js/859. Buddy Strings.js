// https://leetcode.com/problems/buddy-strings

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const buddyStrings = (s, goal) => {
  if (s.length !== goal.length) {
    return false;
  }
  let indexes = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      indexes.push(i);
    }
  }
  if (!indexes.length) {
    let map = new Map();
    for (const letter of s) {
      map.set(letter, (map.get(letter) || 0) + 1);
    }
    return [...map.values()].filter(n => n >= 2).length !== 0;
  }
  if (indexes.length > 2) {
    return false;
  }
  const arr = s.split("");
  [arr[indexes[0]], arr[indexes[1]]] = [arr[indexes[1]], arr[indexes[0]]];

  return arr.join("") === goal;
};