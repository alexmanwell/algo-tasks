// https://www.codewars.com/kata/52840d2b27e9c932ff0016ae

const locate = (arr, value) => {
  let stack = [arr];
  while (stack.length) {
    const items = stack.pop();
    for (let item of items) {
      if (Array.isArray(item)) {
        stack.push(item);
      } else if (item === value) {
        return true;
      }
    }
  }

  return false;
};