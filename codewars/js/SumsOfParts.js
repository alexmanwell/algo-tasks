// https://www.codewars.com/kata/5ce399e0047a45001c853c2b

const sum = (ls) => {
  let result = 0;
  for (let i = 0; i < ls.length; i++) {
    result += ls[i];
  }

  return result;
};

function partsSums(ls) {
  if (ls.length === 0) {
    return [0];
  }

  let result = [];
  let s = sum(ls);
  for (let i = 0; i < ls.length; i++) {
    result.push(s);
    s -= ls[i];
  }
  result.push(0);

  return result;
}