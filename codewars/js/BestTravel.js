// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa

function* generateCombs(items, combSize) {
  if (combSize < 1) {
    yield [];
    return;
  }

  for (let i = 0; i <= items.length - combSize; i++) {
    const restItems = items.slice(i + 1, items.length);

    for (const comb of generateCombs(restItems, combSize - 1)) {
      yield [items[i], ...comb];
    }
  }
}

const combineList = (list, k) => {
  let result = [];
  for (let combine of generateCombs(list, k)) {
    result.push(combine);
  }

  return result;
};

const chooseBestSum = (total, towns, distances) => {
  const combines = combineList(distances, towns);
  const sumOfDistances = combines
    .map((arr) =>
      arr.reduce((acc, v) =>
        acc + v, 0)
    )
    .filter(v => v <= total);

  return sumOfDistances.length
    ? Math.max(...sumOfDistances)
    : null;
};