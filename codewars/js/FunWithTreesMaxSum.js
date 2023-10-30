// https://www.codewars.com/kata/57e5279b7cf1aea5cf000359

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const convertTreeToListOfLists = (root) => {
  let list = [];
  const stack = [{node: root, values: []}];
  while (stack.length) {
    const item = stack.pop();
    if (item) {
      const values = [...item.values, item.node.value];
      if (item.node.left) {
        stack.push({node: item.node.left, values: values});
      }
      if (item.node.right) {
        stack.push({node: item.node.right, values: values});
      }
      if (!item.node.left && !item.node.right) {
        list.push(values);
      }
    }
  }

  return list;
};

const maxSum = (root) => {
  let list = [];
  if (root) {
    list = convertTreeToListOfLists(root);
  }

  return !root ? 0 : Math.max(...list
    .map(items => {
      return items.reduce((acc, item) => {
        return acc + item
      }, 0);
    })
  )
};


console.log(maxSum(
  new TreeNode(5,
    new TreeNode(4,
      new TreeNode(-80),
      new TreeNode(-60)
    ),
    new TreeNode(10,
      new TreeNode(-90)
    )
  )
), -51);
console.log(maxSum(
  new TreeNode(17,
    new TreeNode(3,
      new TreeNode(2)
    ),
    new TreeNode(-10,
      new TreeNode(16),
      new TreeNode(1,
        new TreeNode(13)
      )
    )
  )
), 23);