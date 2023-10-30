// https://www.codewars.com/kata/5800580f8f7ddaea13000025

const sumTheTreeValues = (root) => {
  const values = [];
  if (root) {
    const stack = [root];
    while (stack.length) {
      const node = stack.pop();
      values.push(node.value);
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
  }

  return !root ? 0 : values.reduce((acc, value) => acc + value, 0);
};