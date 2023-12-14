// https://www.codewars.com/kata/5845e6a7ae92e294f4000315

const sumNestedNumbers = (arr) => {
  let stack = [{list: arr, depth: 1}];
  let sum = 0;
  while (stack.length) {
    const node = stack.pop();
    const values = node.list;
    for (let i = 0; i < values.length; i++) {
      if (Array.isArray(values[i])) {
        stack.push({
          list: values[i],
          depth: node.depth + 1
        });
      } else {
        sum += values[i] ** node.depth;
      }
    }
  }

  return sum;
};