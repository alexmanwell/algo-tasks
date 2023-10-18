// https://www.codewars.com/kata/5a6225e5d8e145b540000127

const arrayToMap = (arr) => {
  const map = new Map();
  for (let item of arr) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  }

  return map;
};

const common = (...arrays) => {
  let listOfMap = arrays
    .sort((a, b) => a.length - b.length)
    .map((numbers) => arrayToMap(numbers));

  const map = listOfMap[0];
  listOfMap = listOfMap.slice(1);
  const result = [];
  for (let [number, amount] of map.entries()) {
    const amountOfNumber = new Array(arrays.length - 1);
    let index = 0;
    let isSame = true;
    for (let map of listOfMap) {
      if (!map.has(number)) {
        isSame = false;
        break;
      } else {
        amountOfNumber[index] = map.get(number);
        index++;
      }
    }
    if (isSame) {
      result.push([number, Math.min(amount, ...amountOfNumber)]);
    }
  }

  return result.reduce((acc, [number, amount]) => acc + number * amount, 0);
};