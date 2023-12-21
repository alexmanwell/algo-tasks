// https://www.codewars.com/kata/5298961d9ce954d77b0003a6

const rangeOf = (start, stop, step) => {
  let result = [];
  for (let i = start; i < stop; i += step) {
    result.push(i);
  }

  return result;
};

const range = (args) => {
  let [start, stop, step] = args;
  const length = args.length;
  if (length === 1) {
    [start, stop, step] = [0, args[0], 1];
  } else if (length === 2) {
    step = 1;
  }

  return !step
    ? new Array(stop - start).fill(start)
    : rangeOf(start, stop, step);
};