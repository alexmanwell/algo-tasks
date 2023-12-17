// https://www.codewars.com/kata/55cf9b9e66e66c42fa000013

const recordDepth = (tree) => {
  if (typeof tree !== "object" ||
    tree === null ||
    Array.isArray(tree)
  ) {
    return null;
  }

  let depth = 0;
  let queue = [tree];
  while (queue.length) {
    const obj = queue.shift();
    Object.assign(obj, {depth: depth});
    for (const key of Object.keys(obj)) {
      if (typeof obj[key] === "object") {
        queue.push(obj[key]);
      }
    }
    depth++;
  }

  return tree;
};