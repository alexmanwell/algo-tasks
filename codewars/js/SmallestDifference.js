// https://www.codewars.com/kata/585de79128bc74912d0001c5

const smallestDiff = (arr1, arr2) => {
  if (!arr1.length && !arr2.length) {
    return -1;
  }
  if (!arr1.length) {
    return Math.min(...arr2);
  }
  if (!arr2.length) {
    return Math.min(...arr1);
  }
  const max = Math.max(...arr1, ...arr2);
  let result = -1;
  let diff = 0;
  while (diff < max) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i] + diff) ||
        arr2.includes(arr1[i] - diff)) {
        result = diff;
        break;
      }
    }
    if (result >= 0) {
      break;
    }
    diff++;
  }

  return result;
};