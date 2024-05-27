// https://leetcode.com/problems/isomorphic-strings

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  let map = new Map();
  if (s.length !== t.length) {
    return false;
  }
  if (new Set(s).size !== new Set(t).size) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], t[i]);
    }
    if (map.get(s[i]) !== t[i]) {
      return false;
    }
  }

  return true;
};