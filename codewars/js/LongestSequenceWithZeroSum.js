// https://www.codewars.com/kata/52b4d1be990d6a2dac0002ab

const maxZeroSequence = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === 0) {
        const temp = arr.slice(i, j + 1);
        result = (result.length <= temp.length) ? temp : result;
      }
    }
  }

  return result;
};