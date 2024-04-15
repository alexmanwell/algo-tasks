// https://www.codewars.com/kata/525481903700c1a1ff0000e1

const cache = (fn) => {
  let memo = {};
  return (args) => {
    if (!fn) {
      return undefined;
    }
    if (!memo[args]) {
      memo[args] = fn(args);
    }

    return memo[args];
  }
};