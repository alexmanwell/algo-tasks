// https://www.codewars.com/kata/52105fab0bd0ce9dd00000fe

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
};

// Bubble sort
const sort = (items) => {
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (items[i] > items[j]) {
        items = swap(items, i, j);
      }
    }
  }

  return items;
};