// https://leetcode.com/problems/counter-ii/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = (init) => {
  let count = 0;
  return {
    increment: () => {
      return init + ++count;
    },

    decrement: () => {
      return init + --count;
    },

    reset: () => {
      count = 0;
      return init;
    }
  }
};