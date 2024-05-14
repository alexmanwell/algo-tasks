// https://www.codewars.com/kata/5453dce502949307cf000bff

const nexus = (users) => {
  let result = Number.MAX_SAFE_INTEGER;
  let diff = Number.MAX_SAFE_INTEGER;
  for (let [rank, honor] of Object.entries(users)) {
    const candidate = Math.abs(rank - honor);
    if (candidate === diff && result > rank) {
      result = rank;
    }
    if (candidate < diff) {
      diff = candidate;
      result = rank;
    }
  }

  return +result;
};