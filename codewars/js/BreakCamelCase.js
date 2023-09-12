// https://www.codewars.com/kata/5208f99aee097e6552000148

const solution = (s) => {
  return s
    .split(/(?=[A-Z])/)
    .join(" ");
};