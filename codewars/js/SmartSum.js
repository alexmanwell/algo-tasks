// https://www.codewars.com/kata/5831200eb812b8016d000094

const smartSum = (...items) => {
  let sum = 0;
  let stack = [items];
  while (stack.length) {
    let node = stack.pop();
    for (let i = 0; i < node.length; i++) {
      if (Array.isArray(node[i])) {
        stack.push(node[i]);
      } else {
        sum += node[i];
      }
    }
  }

  return sum;
};