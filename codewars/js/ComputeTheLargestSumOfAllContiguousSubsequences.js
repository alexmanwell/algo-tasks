// https://www.codewars.com/kata/56001790ac99763af400008c

const largestSum = (arr) => {
  let max = 0;
  let subMax = 0;
  for (let i = 0; i < arr.length; i++) {
    subMax += arr[i];
    if (max < subMax) {
      max = subMax;
    }
    if (subMax < 0) {
      subMax = 0;
    }
  }

  return max;
};;