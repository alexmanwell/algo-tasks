// https://www.codewars.com/kata/52f831fa9d332c6591000511

const OPEN_BRACKETS = "([{";
const CLOSE_BRACKETS = ")]}";

const parseMolecule = (formula) => {
  let map = new Map();
  let stack = [{formula: formula, multiplier: 1}];
  while (stack.length) {
    let node = stack.pop();
    let arr = node.formula;
    let index = 0;
    while (index < arr.length) {
      if (OPEN_BRACKETS.includes(arr[index])) {
        const open = OPEN_BRACKETS.indexOf(arr[index]);
        const close = arr.split("").indexOf(CLOSE_BRACKETS[open], index + 1);
        const multiplier = Number.isInteger(+arr[close + 1]) ? +arr[close + 1] : 1;
        stack.push({
          formula: arr.slice(index + 1, close),
          multiplier: multiplier * node.multiplier
        });
        index = multiplier !== 1 ? close + 2 : close + 1;
      } else {
        while (index < arr.length) {
          let str = "";
          if (arr[index] && /[A-Z]/.test(arr[index])) {
            str += arr[index];
            index++;
          }
          if (arr[index] && /[a-z]/.test(arr[index])) {
            str += arr[index];
            index++;
          }
          let factor = "";
          while (arr[index] && /[1-9]/.test(arr[index])) {
            factor += arr[index];
            index++;
          }
          const multiplier = node.multiplier;
          factor = factor.length ? +factor * multiplier : multiplier;
          map.set(str, map.has(str) ? map.get(str) + factor : factor);
          if (OPEN_BRACKETS.includes(arr[index])) {
            break;
          }
        }
      }
    }
  }

  return Object.fromEntries(map);
};