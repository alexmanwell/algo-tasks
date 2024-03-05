// https://www.codewars.com/kata/566c3f5b9de85fdd0e000026

const buildStep = (n) => {
  return new Array(n)
    .fill(0)
    .map((item, index) =>
      (index + 1) % 10
    );
};

const buildStair = (arr) => {
  return arr.join(" ")
    + " "
    + [...arr].reverse().join(" ")
};

const stairs = (n) => {
  let stairs = [];
  let size = 0;
  for (let i = 1; i <= n; i++) {
    const step = buildStep(i);
    const stair = buildStair(step);
    size = stair.length;
    stairs.push(stair);
  }

  let result = new Array(stairs.length).fill(null);
  for (let i = 0; i < stairs.length; i++) {
    const stair = stairs[i];
    const count = size - stair.length;
    result[i] = " ".repeat(count) + stair;
  }

  return result.join("\n");
};