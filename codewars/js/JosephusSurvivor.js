// https://www.codewars.com/kata/555624b601231dc7a400017a
// TODO: doesn't pass time limit tests.

const generateArray = (n) => {
  return new Array(n).fill(0).map((n, index) => index + 1);
};

const josephusSurvivor = (n, k) => {
  const arr = generateArray(n);
  let index = 0;
  let result = 0;
  while (!arr.every(n => n === null)) {
    let step = 0;
    while (step < k - 1) {
      while (arr[index] && step < k - 1) {
        step++;
        index++;
      }
      if (index >= arr.length) {
        index = index - arr.length;
      }
      while (!arr[index]) {
        index++;
        if (index >= arr.length) {
          index = index - arr.length;
        }
      }
    }
    result = arr[index];
    arr[index] = null;
    index++;
  }

  return result;
};