// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

const upArray = (arr) => {
  const negative = arr.find(item => item < 0);
  const singleDigit = arr.find(item => Math.floor(item / 10) > 0);
  let next = 0;
  let result = (arr.length !== 0) ? [...arr] : [];
  if (result.length && !negative && !singleDigit) {
    result[result.length - 1] += 1;
    for (let i = result.length - 1; i >= 0; i--) {
      result[i] += next;
      next = result[i] % 10 === 0 ? 1 : 0;
      result[i] = next === 1 ? 0 : result[i];
      if (next === 0) {
        break;
      }
    }

    if (next === 1 && result[0] === 0) {
      result.unshift(1);
    }
  }

  return arr.length !== 0 && (!negative && !singleDigit) ? result : null;
};

console.log(upArray([]), null);
console.log(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
console.log(upArray([9, 9]), [1, 0, 0]);
console.log(upArray([2, 3, 9, 9]), [2, 4, 0, 0]);
console.log(upArray([0, 7]), [0, 8]);
console.log(upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1]);
console.log(upArray([1, -9]));
console.log(upArray([1, 10]));
