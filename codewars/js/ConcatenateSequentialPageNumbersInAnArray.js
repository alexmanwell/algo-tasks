// https://www.codewars.com/kata/57d83dfc950d842dcb00005b

const paginate = (arr) => {
  arr = arr.sort((a, b) => a - b);
  let result = [];
  let start = arr[0];
  let end = -1;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i + 1] === arr[i] + 1) {
      end = arr[i + 1];
      i++;
    }
    if (end === -1) {
      result.push(start);
      start = arr[i + 1];
    } else {
      result.push(`${start}-${end}`);
      start = arr[i + 1];
      end = -1;
    }
  }

  return result.join(", ");
};