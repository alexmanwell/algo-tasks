// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// TODO: solved task, but tests failed. Throw runtime error:
/*
Line 14 in solution.js
result.push(...stack.shift());
^
TypeError: stack.shift(...) is not iterable (cannot read property undefined)
Line 14: Char 10 in solution.js (letterCombinations)
Line 37: Char 19 in solution.js (Object.<anonymous>)
Line 16: Char 8 in runner.js (Object.runner)
Line 28: Char 26 in solution.js (Object.<anonymous>)
at Module._compile (node:internal/modules/cjs/loader:1101:14)
at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
at Module.load (node:internal/modules/cjs/loader:981:32)
at Function.Module._load (node:internal/modules/cjs/loader:822:12)
at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
at node:internal/main/run_main_module:17:47
*/

const DIGIT_TO_LETTERS = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  const stack = [];
  for (let digit of digits.split("").map(Number)) {
    stack.push(DIGIT_TO_LETTERS[digit].split(""));
  }
  console.log(stack);
  let result = [];
  result.push(...stack.shift());
  while (stack.length !== 0) {
    const letters = stack.shift();
    const temp = [];
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        temp.push(result[i] + letters[j]);
      }
    }
    result = temp;
  }

  return result;
};