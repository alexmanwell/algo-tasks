// https://www.codewars.com/kata/59c35ba16bddd219ee000082

const perimeter = (n) => {
  let [current, next] = [1n, 1n];
  for (let i = 0; i < n; i++) {
    [next, current] = [current + next, next];
  }

  return (current + next) * 2n;
};