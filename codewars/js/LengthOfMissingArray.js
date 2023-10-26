// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

const getLengthOfMissingArray = (listOfArrays) => {
  let result = 0;
  if (listOfArrays && !listOfArrays.includes(null)) {
    let sorted = listOfArrays
      .map(arr => arr.length)
      .sort((a, b) => a - b);

    if (!sorted.includes(0)) {
      for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i + 1] !== sorted[i] + 1) {
          result = sorted[i] + 1;
          break;
        }
      }
    }
  }

  return result;
};