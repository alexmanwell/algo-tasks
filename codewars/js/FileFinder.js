// https://www.codewars.com/kata/59de9e6a28fcedb892000142

const search = (files) => {
  let stack = [[files, ""]];
  let paths = [];
  while (stack.length) {
    let [obj, path] = stack.pop();
    for (let key in obj) {
      if (obj[key] && typeof obj[key] === 'object') {
        let directory = path ? path + "/" + key : key;
        stack.push([obj[key], directory]);
      } else if (obj[key]) {
        paths.push(path + "/" + key);
      }
    }
  }
  if (!paths.length) {
    throw new Error('No files!');
  }

  return paths.join("");
};