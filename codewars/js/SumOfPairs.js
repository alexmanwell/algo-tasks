// https://www.codewars.com/kata/54d81488b981293527000c8f

const findPairWithSmallestLastIndex = (ints, pairs) => {
  let lastIndex = Number.MAX_SAFE_INTEGER;
  let pair = [];
  for (let [firstItem, lastItem] of pairs) {
    const indexOfLastItem =
      ints.indexOf(
        lastItem,
        ints.indexOf(firstItem) + 1
      );
    if (lastIndex > indexOfLastItem) {
      lastIndex = indexOfLastItem;
      pair = [firstItem, lastItem];
    }
  }

  return pair;
};

const sumPairs = (ints, value) => {
  let pairs = [];
  let uniques = [...new Set(ints)];
  for (let i = 0; i < uniques.length; i++) {
    const candidate = value - uniques[i];
    if (ints.includes(candidate, ints.indexOf(uniques[i]) + 1)) {
      pairs.push([uniques[i], candidate]);
    }
  }

  const findPair = findPairWithSmallestLastIndex(ints, pairs);
  return (findPair.length > 0) ? findPair : undefined;
};