// https://leetcode.com/problems/create-hello-world-function/

/**
 * @return {Function}
 */
const createHelloWorld = () => {
  return (...args) => {
    return "Hello World";
  }
};