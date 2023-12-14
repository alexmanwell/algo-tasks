// https://www.codewars.com/kata/5694d22eb15d78fe8d00003a

const groupIn10s = (...values) => {
  if (values.length === 0) {
    return [];
  }
  const sorted = values.sort((a, b) => a - b);
  const max = sorted[sorted.length - 1];
  let groups = new Array(Math.floor(max / 10) + 1);
  for (let i = 0; i < groups.length; i++) {
    groups[i] = sorted.filter(v =>
      (v >= i * 10) && (v <= (i + 1) * 10 - 1)
    );
    groups[i] =
      (!groups[i].length)
        ? undefined
        : groups[i];
  }

  return groups;
};