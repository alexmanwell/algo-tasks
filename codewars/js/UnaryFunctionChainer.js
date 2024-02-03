// https://www.codewars.com/kata/54ca3e777120b56cb6000710

const chained = (functions) => (arg) => {
  return functions.reduce((acc, fn) => fn(acc), arg);
};