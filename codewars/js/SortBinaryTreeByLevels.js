// https://www.codewars.com/kata/52bef5e3588c56132c0003bc

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const treeByLevels = (rootNode) => {
  if (!rootNode) {
    return [];
  }

  const stack = [[rootNode, 0]];
  const map = new Map();
  while (stack.length) {
    const [node, depth] = stack.pop();
    map.set(depth, map.has(depth) ? [node.value, ...map.get(depth)] : [node.value]);
    if (node.left) {
      stack.push([node.left, depth + 1]);
    }
    if (node.right) {
      stack.push([node.right, depth + 1]);
    }
  }

  return [...map.values()]
    .reduce((list, values) => {
      list.push(...values);
      return list;
    }, []);
};