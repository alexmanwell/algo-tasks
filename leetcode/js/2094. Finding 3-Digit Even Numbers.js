// https://leetcode.com/problems/finding-3-digit-even-numbers
// TODO: this solution doesn't pass time limit tests.

const combinations = (items) => {
  let stack = [[items.slice(), 0]];
  let result = [];
  while (stack.length) {
    let [numbers, index] = stack.pop();
    if (index === numbers.length - 1) {
      result.push([...numbers.slice()]);
    } else {
      stack.push([[...numbers.slice()], index + 1]);
      for (let i = index + 1; i < numbers.length; i++) {
        [numbers[index], numbers[i]] = [numbers[i], numbers[index]];
        stack.push([[...numbers.slice()], index + 1]);
        [numbers[index], numbers[i]] = [numbers[i], numbers[index]];
      }
    }
  }

  return result;
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const findEvenNumbers = (digits) => {
  const combs = [];
  for (let i = 0; i < digits.length - 2; i++) {
    for (let j = i + 1; j < digits.length - 1; j++) {
      for (let k = j + 1; k < digits.length; k++) {
        combs.push(...combinations([digits[i], digits[j], digits[k]]));
      }
    }
  }
  let result = [];
  for (const numbers of combs) {
    if (numbers[0] === 0) {
      continue;
    }
    const number = +numbers.join("");
    if (number % 2 === 0) {
      result.push(number);
    }
  }

  return [...new Set(result)].sort((a, b) => a - b);
};