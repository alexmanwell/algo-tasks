// https://www.codewars.com/kata/590148d79097384be600001e

const sortByGuide = (arr, guide) => {
  let result = new Array(arr.length).fill(null);
  let index = -1;
  while (index < guide.length) {
    index = guide.indexOf(-1, index + 1);
    if (index === -1) {
      break;
    }
    result[index] = arr[index];
  }

  let position = 0;
  while (index < arr.length) {
    index = guide.indexOf(position + 1);
    if (index === -1) {
      break;
    }
    result[result.indexOf(null)] = arr[index];
    position++;
  }

  return result;
};