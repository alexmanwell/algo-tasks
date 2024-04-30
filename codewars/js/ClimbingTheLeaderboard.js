// https://www.codewars.com/kata/5b19f34c7664aacf020000ec

const climbingLeaderboard = (scores, ranks) => {
  let positions = new Array(ranks.length).fill(-1);
  let position = 1;
  let scoreIndex = 0;
  let score = scores[scoreIndex];
  let index = ranks.length - 1;
  while (index >= 0) {
    if (!score) {
      positions[index] = position;
      index--;
    }
    if (ranks[index] >= score) {
      positions[index] = position;
      index--;
    } else {
      scoreIndex++;
      const candidate = scores[scoreIndex];
      if (score !== candidate) {
        position++;
      }
      score = candidate;
    }
  }

  return positions;
};