// https://www.codewars.com/kata/55466989aeecab5aac00003e

const sqInRect = (length, width) => {
  const result = [];
  if (length !== width) {
    let min = Math.min(length, width);
    let max = Math.max(length, width);
    while (min !== 0) {
      result.push(Math.min(min, max));
      const temp = max - min;
      max = Math.max(min, temp);
      min = Math.min(max, min, temp);
    }
  }

  return result.length === 0 ? null : result;
};