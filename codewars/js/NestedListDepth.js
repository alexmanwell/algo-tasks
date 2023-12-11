// https://www.codewars.com/kata/56b3b9c7a6df24cf8c00000e

const arrayDepth = (arr) => {
  let stack = [{node: arr, depth: 1}];
  let result = [1];
  while (stack.length) {
    const node = stack.pop();
    const [items, depth] = [node.node, node.depth];
    for (let item of items) {
      if (Array.isArray(item)) {
        stack.push({node: item, depth: depth + 1});
      }
    }
    result.push(depth);
  }

  return Math.max(...result);
};