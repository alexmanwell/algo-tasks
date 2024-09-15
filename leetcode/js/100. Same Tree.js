// https://leetcode.com/problems/same-tree

class TreeNode {

  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  let stack = [[p, q]];
  while (stack.length) {
    let [node1, node2] = stack.pop();
    if (node1 === null && node2 === null) {
      return true;
    }
    if (node1 === null || node2 === null || node1.value !== node2.value) {
      return false;
    }
    stack.push([node1.left, node2.left]);
    stack.push([node1.right, node2.right]);
  }

  return true;
};