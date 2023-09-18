// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

const element = el => el;
const typeElement = el => (a = element) => a(el);
const [
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(typeElement);

const plus = el2 => el1 => el1 + el2;
const minus = el2 => el1 => el1 - el2;
const times = el2 => el1 => el1 * el2;
const dividedBy = el2 => el1 => Math.floor(el1 / el2);