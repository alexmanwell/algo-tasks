// https://www.codewars.com/kata/53cae2709bbf4cb80c000575

const pascal = (depth) => {
  let results = [];
  let temp = [];
  for (let r = 1; r <= depth; r++) {
    for (let c = 1; c <= r; c++) {
      temp.push(member(c, r));
    }
    results.push(temp);
    temp = [];
  }

  return results;
};

const member = (c, r) => {
  return c === r || c === 1
    ? 1
    : member(c - 1, r - 1) + member(c, r - 1);
};