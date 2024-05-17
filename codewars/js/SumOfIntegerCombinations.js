// https://www.codewars.com/kata/59f3178e3640cef6d90000d5

const find = (items, target) => {
  items = items.sort((a, b) => a - b);
  let combinations = [];
  let combination = [];
  let fills = [];
  const max = items[items.length - 1];
  while (true) {
    combination = [...combination, ...fills];
    let amountCoins = (combination.length > 0) ? combination.reduce((a, b) => a + b) : 0;
    if (amountCoins < target) {
      fills = new Array(Math.ceil((target - amountCoins) / items[0])).fill(items[0]);
    }
    if (amountCoins === target) {
      if (combination.length <= items.length) {
        combinations.push(combination);
      }
      combination = [...combination];
    }
    if (amountCoins >= target) {
      const min = Math.min(...combination);
      if (min < max) {
        const index = combination.indexOf(min);
        const item = items.indexOf(min);
        combination[index] = items[item + 1];
        combination = combination.slice(0, index + 1);
        fills = [];
      } else {
        break;
      }
    }
  }

  return combinations.length;
};