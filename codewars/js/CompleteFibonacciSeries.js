// https://www.codewars.com/kata/5239f06d20eeab9deb00049b

const fibonacci = (n) => {
  let [current, next] = [0, 1];
  const result = [current, next];
  for (let i = 0; i < n - 2; i++) {
    [current, next] = [next, current + next];
    result.push(next);
  }

  return n > 0 ? result : [];
};