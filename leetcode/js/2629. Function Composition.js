// https://leetcode.com/problems/function-composition/

/**
 * @param {Function[]} fns
 * @return {Function}
 */
const compose = (fns) => {
  return (x) => {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  }
};

console.log(compose([x => x + 1, x => 2 * x])(4));