// https://www.codewars.com/kata/584ebd7a044a1520f20000d5

const range = (start, step, end) => {
  let result = [];
  if (!step) {
    step = 1;
    end = start;
    start = 1;
  } else if (!end) {
    end = step;
    step = 1;
  }
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }

  return result;
};