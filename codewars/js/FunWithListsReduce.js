// https://www.codewars.com/kata/58319f37aeb69a89a00000c7

const reduce = (head, f, init) => {
  return (head === null) ? init : reduce(head.next, f, f(init, head.data));
};