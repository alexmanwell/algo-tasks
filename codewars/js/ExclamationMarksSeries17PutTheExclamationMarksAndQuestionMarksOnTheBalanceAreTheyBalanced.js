// https://www.codewars.com/kata/57fb44a12b53146fe1000136

const WEIGHTS = {
  "!": 2,
  "?": 3
};

const countMarks = (arr) => {
  return arr
    .reduce((map, item) => {
      map[item] = map[item] ? map[item] + 1 : 1;
      return map;
    }, {});
};

const computeWeight = (map, weights) => {
  let result = 0;
  for (let [mark, amount] of Object.entries(map)) {
    result += weights[mark] * amount;
  }

  return result;
};

const balance = (left, right) => {
  left = left.split("");
  right = right.split("");
  const computeLeftWeight = computeWeight(countMarks(left), WEIGHTS);
  const computeRightWeight = computeWeight(countMarks(right), WEIGHTS);

  return computeLeftWeight === computeRightWeight
    ? "Balance"
    : computeLeftWeight > computeRightWeight
      ? "Left"
      : "Right";
};