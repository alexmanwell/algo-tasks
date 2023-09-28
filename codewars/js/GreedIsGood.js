// https://www.codewars.com/kata/5270d0d18625160ada0000e4

const THREE = 3;
const score = (dice) => {
  const tableOfThreeDiceScores = new Map();
  tableOfThreeDiceScores.set(1, 1000);
  tableOfThreeDiceScores.set(6, 600);
  tableOfThreeDiceScores.set(5, 500);
  tableOfThreeDiceScores.set(4, 400);
  tableOfThreeDiceScores.set(3, 300);
  tableOfThreeDiceScores.set(2, 200);

  const tableOfOnceDiceScores = new Map();
  tableOfOnceDiceScores.set(1, 100);
  tableOfOnceDiceScores.set(5, 50);

  const countDices = new Map();
  dice.forEach((nominal) =>
    countDices.set(nominal,
      countDices.has(nominal)
        ? countDices.get(nominal) + 1
        : 1)
  );

  let scores = 0;
  for (let [nominal, count] of countDices.entries()) {
    if (tableOfThreeDiceScores.has(nominal)) {
      while (count > 0) {
        if (parseInt(count / THREE) >= 1) {
          scores += tableOfThreeDiceScores.get(nominal);
          count -= THREE;
        } else if (tableOfOnceDiceScores.has(nominal)) {
          scores += tableOfOnceDiceScores.get(nominal);
          count--;
        } else {
          break;
        }
      }
    }
  }

  return scores;
};