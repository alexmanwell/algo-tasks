// https://www.codewars.com/kata/5596f6e9529e9ab6fb000014

const shiftedDiff = (first, second) => {
  let amountShifts = 0;
  if (first !== second) {
    amountShifts = first.length - first.indexOf(second.charAt(0));
    first = first.split("");
    first = first.splice(-amountShifts).concat(first).join("");
  }

  return first === second ? amountShifts : -1;
};