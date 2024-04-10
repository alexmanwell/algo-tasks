// https://www.codewars.com/kata/5b8c055336332fce3d00000e
// TODO: this solution doesn't pass time limit tests.

const rec = (n) => {
  if (n <= 0) {
    return 0;
  }
  let uniques = new Set().add(0);
  let prev = 0;
  let result = 0;
  for (let i = 1; i < n; i++) {
    let current = prev - i;
    if (current < 0 || uniques.has(current)) {
      current = prev + i;
    }
    result += current;
    prev = current;
    uniques.add(prev);
  }

  return result;
};