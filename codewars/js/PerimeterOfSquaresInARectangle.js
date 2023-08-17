// https://www.codewars.com/kata/559a28007caad2ac4e000083

const perimeter = (n) => {
  let prev = 0;
  let next = 1;
  let result = prev + next;
  for (let i = 0; i < n; i++) {
    let temp = next;
    next = prev + next;
    prev = temp;
    result += next;
  }

  return 4 * result;
};