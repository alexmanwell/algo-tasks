// https://www.codewars.com/kata/593a061b942a27ac940000a7

const gettingMad = (arr) => {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const diff = Math.abs(arr[i] - arr[j]);
      if (diff < min) {
        min = diff;
      }
    }
  }

  return min;
};