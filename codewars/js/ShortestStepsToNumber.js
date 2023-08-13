// https://www.codewars.com/kata/5cd4aec6abc7260028dcd942

function shortestStepsToNum(num) {
  let count = 0;
  while (num !== 1) {
    num = (num % 2 === 0) ? num / 2 : num - 1;
    count++;
  }

  return count;
}