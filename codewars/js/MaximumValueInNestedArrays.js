// https://www.codewars.com/kata/5844ba39a87f763849000c98

const findNestedMaximum = (arr) => {
  let stack = [arr];
  let numbers = [];
  while (stack.length) {
    const items = stack.pop();
    for (let item of items) {
      if (Array.isArray(item)) {
        stack.push(item);
      } else {
        numbers.push(item);
      }
    }
  }

  return Math.max(...numbers);
};