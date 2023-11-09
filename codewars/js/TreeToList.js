// https://www.codewars.com/kata/56ef9790740d30a7ff000199

/*
 preloaded Node definition :
*/
class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
}

const treeToArray = (tree) => {
  if (!tree) {
    return [];
  }
  const map = new Map();
  const stack = [[tree, 0]];
  while (stack.length) {
    const [node, depth] = stack.pop();
    map.set(depth, map.has(depth) ? [node.data, ...map.get(depth)] : [node.data]);
    const children = node.children;
    if (children && children.length !== 0) {
      for (let child of children) {
        stack.push([child, depth + 1]);
      }
    }
  }

  return [...map.values()].reduce((list, values) => {
    list.push(...values);
    return list;
  }, []);
};