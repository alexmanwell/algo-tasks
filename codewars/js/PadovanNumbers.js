// https://www.codewars.com/kata/5803ee0ed5438edcc9000087

const padovan = (n) => {
  let [prev, current, next] = [1, 1, 1];
  for (let i = 3; i <= n; i++) {
    [prev, current, next] = [current, next, prev + current];
  }

  return n > 2 ? next : 1;
};