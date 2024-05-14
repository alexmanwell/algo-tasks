// https://www.codewars.com/kata/5a1d86dbba2a142e040000ee

const combinations = (arr) => {
  let stack = [[arr.slice(), 0]];
  let result = [];

  while (stack.length) {
    const [items, index] = stack.pop();

    if (index === items.length - 1) {
      result.push([...items.slice()]);
    } else {
      stack.push([items.slice(0, arr.length), index + 1]);
      for (let i = index + 1; i < items.length; i++) {
        [items[index], items[i]] = [items[i], items[index]];
        stack.push([items.slice(0, arr.length), index + 1]);
        [items[index], items[i]] = [items[i], items[index]];
      }
    }
  }

  return result;
}

const findNumber = (start, stop, str) => {
  const digits = str.split("");
  let candidates = [];
  let from = start;
  while (from <= stop) {
    let arr = from.toString().split("");
    let candidate = "";
    for (let i = 0; i < arr.length; i++) {
      const index = digits.indexOf(arr[i]);
      if (index !== -1) {
        digits[index] = " ";
      }
      if (index === -1) {
        candidate += arr[i];
      }
    }
    if (candidate.length > 0) {
      candidates.push(candidate);
    }
    from++;
  }

  let result = [];
  if (candidates.length > 0) {
    const combo = combinations(candidates.join("").split(""));
    for (let item of combo) {
      const temp = +item.join("");
      if (String(temp).length === item.length) {
        result.push(temp);
      }
    }
  }

  return [...new Set(result)]
    .filter(item => item >= start && item <= stop)
    .sort((a, b) => a - b);
};