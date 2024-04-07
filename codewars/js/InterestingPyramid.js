// https://www.codewars.com/kata/5711efdcdf94ddeeba0001d7

const PYRAMID_LINES = [
  (n) => n === 1 ? " *" : " *".repeat(n + 1),
  (n) => {
    return new Array(n + 1)
      .fill(0)
      .map((num, index) => (index + 1) % 10)
      .map(item => " " + item)
      .join("")
  },
  (n) => " #".repeat(n + 1)
];

const pattern = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error(`Invalid input ${n}`);
  }
  if (n === 0) {
    return "";
  }
  let count = 1;
  let result = [];
  while (count <= n) {
    const s = count === 1 ? " ".repeat(n) : " ".repeat(n - count);
    result.push(s + PYRAMID_LINES[(count - 1) % PYRAMID_LINES.length](count));
    count++;
  }

  return result.join("\n");
};