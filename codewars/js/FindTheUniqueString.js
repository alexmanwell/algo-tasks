// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

const ascending = (a, b) => {
  return a.localeCompare(b);
}

const uniques = str => [...new Set(str)];

const findUniq = (arr) => {
  let map = new Map();
  let amounts = new Map();
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    item = uniques(item.toLowerCase())
      .sort(ascending)
      .join("")
      .trim();
    map.set(item, arr[i]);
    amounts.set(item, amounts.has(item) ? amounts.get(item) + 1 : 1);
    if (amounts.get(item) > 1) {
      map.delete(item);
    }
  }

  return [...map.values()][map.size - 1];
};