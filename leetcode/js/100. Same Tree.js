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
 * @param {TreeNode} tree1
 * @param {TreeNode} tree2
 * @return {boolean}
 */
const isSameTree = (tree1, tree2) => {
  if (!tree1 && !tree2) {
    return true;
  }
  if (tree1 === null || tree2 === null || tree1.value !== tree2.value) {
    return false;
  }

  return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
};