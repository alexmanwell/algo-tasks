// https://www.codewars.com/kata/57e5a6a67fbcc9ba900021cd

const TreeNode = function (value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

const arrayToTree = (values, i = 0) => {
  if (i >= values.length) return;
  return new TreeNode(
    values[i],
    arrayToTree(values, 2 * i + 1),
    arrayToTree(values, 2 * i + 2)
  );
};