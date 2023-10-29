// https://www.codewars.com/kata/588468f3b3d02cf67b0005cd

const additionWithoutCarrying = (a, b) => {
  const splitA = a.toString().split("").map(Number);
  const splitB = b.toString().split("").map(Number);
  const length = Math.min(splitA.length, splitB.length);
  const result = new Array(length);
  for (let i = 0; i < length; i++) {
    const n = splitA[splitA.length - 1 - i];
    const m = splitB[splitB.length - 1 - i];
    result[length - 1 - i] = (n + m) % 10;
  }
  const arr = splitA.length === length ? splitB : splitA;

  return Number([
      ...arr.slice(0, arr.length - length),
      ...result
    ].join("")
  );
};