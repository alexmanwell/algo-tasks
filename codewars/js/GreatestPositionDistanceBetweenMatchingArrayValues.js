// https://www.codewars.com/kata/5442e4fc7fc447653a0000d5

const greatestDistance = (data) => {
  const distances = data
    .filter(v =>
      data.indexOf(v) !== data.lastIndexOf(v))
    .map(v =>
      data.lastIndexOf(v) - data.indexOf(v)
    );

  return distances.length
    ? Math.max(...distances)
    : 0;
};