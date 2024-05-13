// https://www.codewars.com/kata/583fd0398a20113a83000061
// TODO: doesn't pass time limit tests.

const findTwoUnique = (arr) => {
  let uniques = {};
  for (let item of arr) {
    uniques[item] = !uniques[item];
  }
  let result = [];
  for (let [k, v] of Object.entries(uniques)) {
    if (v) {
      result.push(+k);
    }
  }

  return result.sort((a, b) => a - b);
};