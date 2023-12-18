// https://www.codewars.com/kata/58a4f7f43d97b56d27000022

const countDigits = (arr) => {
  let map = {};
  for (const v of arr) {
    map[v] = map[v] ? map[v] + 1 : 1;
  }

  return map;
};

const filteredOddCountDigits = (obj) => {
  let map = {};
  for (const [digit, amount] of Object.entries(obj)) {
    if (amount % 2 === 1) {
      map[digit] = amount;
    }
  }

  return map;
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
};

const reverseOddCount = (arr) => {
  let map = countDigits(arr);
  let odd = filteredOddCountDigits(map);
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    while (!odd[arr[start]]
    && odd[arr[start]] !== 0) {
      start++;
    }
    while (!odd[arr[end]]
    && odd[arr[end]] !== 0) {
      end--;
    }
    if (odd[arr[start]]
      && odd[arr[end]]) {
      arr = swap(arr, start, end);
      odd[arr[start]] -= 1;
      odd[arr[end]] -= 1;
      start++;
      end--;
    }
  }

  return arr;
};