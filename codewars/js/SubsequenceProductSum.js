// https://www.codewars.com/kata/5d653190d94b3b0021ec8f2b
// TODO: Done this kata. But my solution doesn't pass tests (time limit).

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

const getAllCombinations = (arr, k) => {
  let combinations = [];
  for (const combination of generateCombs(arr, k)) {
    combinations.push(combination.reduce((acc, item) => acc * item, 1));
  }

  return combinations;
};

const productSum = (arr, k) => {
  return getAllCombinations(arr, k)
    .reduce((acc, item) =>
      acc + item, 0
    ) % (1000000007);
};

console.log(productSum([3, 10, 7, 9, 1, 4, 5, 2, 8, 6], 7), 8409500);
console.log(productSum([10, 7, 8, 5, 6, 9, 4, 1, 2, 3], 8), 12753576);
console.log(productSum([1, 7, 6, 10, 21, 5, 9, 8, 5, 4], 2), 2469);
console.log(productSum([6, 7, 8, 5, 2, 4, 9, 3, 1, 10], 6), 3416930);
console.log(productSum([3, 2, 9, 1, 7, 10, 5, 6, 8, 4], 4), 157773);
console.log(productSum([9, 8, 10, 4, 2, 7, 5, 1, 3, 6], 3), 18150);
console.log(productSum([3, 3, 1, 7, 6, 8, 1, 4, 6, 10], 4), 94837);
console.log(productSum([6, 8, 1, 7, 2, 10, 5, 9, 3, 4], 5), 902055);
console.log(productSum([10, 3, 4, 9, 5, 8, 6, 7, 1, 2], 1), 55);
console.log(productSum([7, 9, 4, 2, 3, 10, 8, 6, 5, 1], 9), 10628640);
