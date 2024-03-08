// https://www.codewars.com/kata/58afa8185eb02ea2a7000094

const pairwise = (arr, n) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const a = arr[i];
      const b = arr[j];
      const indexA = map.get(a) || [];
      const indexB = map.get(b) || [];
      if (
        a + b === n
        && !indexA.includes(i)
        && !indexB.includes(j)
      ) {
        map.set(a, map.has(a) ? [...map.get(a), i] : [i]);
        map.set(b, map.has(b) ? [...map.get(b), j] : [j]);
      }
    }
  }

  return [...map.values()]
    .reduce((acc, arr) =>
      acc +
      arr.reduce((sum, item) =>
        sum + item
      ), 0
    );
};