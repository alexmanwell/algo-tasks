// https://www.codewars.com/kata/55eeddff3f64c954c2000059

const sumConsecutives = (arr) => {
  const result = [];
  let current = arr[0];
  let sum = current;
  for (let i = 1; i <= arr.length; i++) {
    const next = arr[i];
    if (current === next) {
      sum += next;
    } else {
      result.push(sum);
      sum = next;
    }
    current = next;
  }

  return result;
};