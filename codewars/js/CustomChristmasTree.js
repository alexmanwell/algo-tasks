// https://www.codewars.com/kata/5a405ba4e1ce0e1d7800012e

const buildTree = (chars, n) => {
  let leaves = 0;
  let tree = new Array(n).fill([]);
  let index = 0;
  while (leaves < n) {
    const leave = [];
    let count = 0;
    while (count <= leaves) {
      leave.push(chars[index]);
      index++;
      count++;
      index = index === chars.length ? 0 : index;
    }
    tree[leaves] = leave;
    leaves++;
  }

  return tree;
};

const makeCenterLeavesOfTree = (tree) => {
  let result = "";
  for (let i = 0; i < tree.length; i++) {
    const leave = tree[i];
    result += " ".repeat(tree.length - 1 - i);
    for (let j = 0; j < leave.length; j++) {
      result += leave[j] + (j !== leave.length - 1 ? " " : "");
    }
    result += "\n";
  }

  return result;
};

const customChristmasTree = (chars, n) => {
  const tree = buildTree(chars, n);
  const centerLeavesOfTree = makeCenterLeavesOfTree(tree);
  const trunk = " ".repeat(tree.length - 1) + "|";

  return centerLeavesOfTree +
    (trunk + "\n").repeat(Math.floor(n / 3) - 1) +
    trunk;
};