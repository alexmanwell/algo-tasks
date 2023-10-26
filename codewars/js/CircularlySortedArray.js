// https://www.codewars.com/kata/544975fc18f47481ba00107b

const isCircleSorted = (arr) => {
  const min = Math.min(...arr);
  const index = min !== arr[arr.length - 1] ? arr.indexOf(min, 0) : arr.length - 1;
  const candidate = [...arr.slice(index), ...arr.slice(0, index)];
  return candidate.join("") === arr.sort((a, b) => a - b).join("");
};