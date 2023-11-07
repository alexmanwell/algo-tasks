// https://www.codewars.com/kata/5a903c0557c562cd7500026f

const solve = (arr) => {
  const result = [];
  const size = arr.length;
  for (let i = 0; i < size - 1; i++) {
    const prev = arr[i];
    for (let j = i + 1; j < size; j++) {
      const cur = arr[j];
      const next = 2 * cur - prev;
      const pos = arr.indexOf(next);
      if (pos !== -1) {
        result.push([prev, cur, next]);
      }
    }
  }

  return result.length;
};