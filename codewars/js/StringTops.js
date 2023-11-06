// https://www.codewars.com/kata/59b7571bbf10a48c75000070

const tops = (msg) => {
  const result = [];
  let start = 0;
  let end = 0;
  let step = 4;
  let count = 1;
  do {
    start += 1;
    end = start + 1;
    result.push(msg.substring(start, end));
    start += count * step;
    count++;
  } while (end < msg.length);

  return result.reverse().join("");
};