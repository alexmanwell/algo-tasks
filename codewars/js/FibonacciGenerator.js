// https://www.codewars.com/kata/522498c9906b0cfcb40001fc

const genfib = () => {
  let [prev, current, next] = [0, 0, 1];
  return function fib() {
    [prev, current, next] = [current, next, current + next];

    return prev;
  };
};