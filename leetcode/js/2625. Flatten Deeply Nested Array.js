// https://leetcode.com/problems/flatten-deeply-nested-array/description/

/**
 * @param {any[]} arr
 * @param {number} maxDepth
 * @return {any[]}
 */
const flat = (arr, maxDepth) => {
  if (maxDepth === 0) {
    return arr;
  }

  const stack = [{node: arr, depth: 0}];
  let result = [];
  while (stack.length !== 0) {
    let {node: elements, depth: depth} = stack.pop();
    for ()
  }

  return result;
};

//const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
//console.log(flat([...arr], 0));
//console.log(flat([...arr], 1));
const arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(flat(arr1, 2));