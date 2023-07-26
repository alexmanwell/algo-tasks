// https://leetcode.com/problems/allow-one-function-call/

/**
 * @param {Function} fn
 * @return {Function}
 */
const once = (fn) => {
  let isExecuted = false;
  return function (...args) {
    if (!isExecuted) {
      isExecuted = true;
      return fn(...args);
    }
  };
};