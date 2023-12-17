// https://www.codewars.com/kata/5b19f34c7664aacf020000ec
// TODO: tests don't pass time limit.

const climbingLeaderboard = (scores, ranks) => {
  let positions = [];
  let position = 1;
  let i = ranks.length - 1;
  let rank = ranks[i];
  let score = 0;
  let j = 0;
  while (i > 0) {
    score = scores[j];
    while (score === scores[j + 1]) {
      j++;
      score = scores[j];
    }
    while (score <= rank) {
      positions.unshift(position);
      i--;
      rank = ranks[i];
    }
    j++;
    position++;
  }
  if (score > rank) {
    positions.unshift(position);
  }

  return positions;
};