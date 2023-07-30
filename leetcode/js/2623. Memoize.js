// https://leetcode.com/problems/memoize

/**
 * @param {Function} fn
 */
const memoize = (fn) => {
  let cache = {};
  return function(...args) {
    if (args in cache) {
      return cache[args];
    } else {
      const result = fn(...args);
      cache[args] = result;
      return result;
    }
  }
};