// https://www.codewars.com/kata/55695bc4f75bbaea5100016b

const fibonacciSequence = function*() {
  let [current, next] = [0n, 1n];
  while(true) {
    [current, next] = [next, current + next];
    yield current;
  }
};