// https://www.codewars.com/kata/583d10c03f02f41462000137

const maxSum = (arr, range) => {
  return Math.max(
    ...range
      .map(([start, end]) => {
        return arr.slice(start, end + 1)
      })
      .map(values => {
        return values.reduce((acc, v) => acc + v, 0)
      })
  );
};