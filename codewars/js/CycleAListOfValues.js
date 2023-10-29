// https://www.codewars.com/kata/5456812629ccbf311b000078

const offsetToValid = (length, index, dir) => {
  const offset = index + dir;
  return offset < 0 ? length - 1 : offset > length - 1 ? 0 : offset;
};

const cycle = (dir, arr, cur) => {
  const findIndex = arr.indexOf(cur);
  const index = findIndex !== -1 ? offsetToValid(arr.length, findIndex, dir) : -1;

  return index !== - 1 ? arr[index] : null;
};