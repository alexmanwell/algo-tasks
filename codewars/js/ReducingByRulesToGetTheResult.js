// https://www.codewars.com/kata/585ba6dff59b3cef3f000132

const reduceByRules = (arr, rules) => {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const rule = rules[(i - 1) % rules.length];
    result = rule(result, arr[i]);
  }

  return result;
};