// https://www.codewars.com/kata/569f6ad962ff1dd52f00000d

const selectQuotients = (arr, m, dirStr) => {
  dirStr = dirStr ? dirStr.toLowerCase() : "";
  arr = [...(new Set(arr))].sort((a, b) => a - b);
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      const div = arr[j] / arr[i];
      if (arr[j] % arr[i] === 0 && div >= m) {
        const indexes = [arr[j], arr[i]];
        map.set(div, map.has(div) ? [...map.get(div), indexes] : [indexes]);
      }
    }
  }
  const filteredList =
    (dirStr === "odd") ? [...map.entries()].filter(([key, arr]) => key % 2 !== 0)
      : (dirStr === "even")
      ? [...map.entries()].filter(([key, arr]) => key % 2 === 0)
      : [...map.entries()];
  filteredList.reverse();

  let result = [];
  filteredList.forEach(([key, arrays]) => {
    arrays.forEach(arr => {
      result.push([key, arr]);
    });
  });

  return result
    .sort(([k1, arr1], [k2, arr2]) =>
      k1 - k2
    );
};