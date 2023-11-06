// https://www.codewars.com/kata/5aa3e2b0373c2e4b420009af

const tops = (msg) => {
  const result = [];
  let start = 0;
  let end = 0;
  let lowest = 2;
  let highest = 2;
  do {
    start += lowest;
    end = start + highest;
    result.push(msg.substring(start, end));
    lowest += 3;
    highest += 1;
    start = end;

  } while (highest <= msg.length);

  return result.reverse().join("");
};