// https://www.codewars.com/kata/59e61c577905df540000016b

const hungrySeven = (arr) => {
  let index = arr.indexOf(7);
  while (index < arr.length) {
    if ((index + 2 < arr.length) &&
      arr[index] === 7 &&
      arr[index + 1] === 8 &&
      arr[index + 2] === 9) {
      if (index === 0) {
        arr = [
          ...arr.slice(1, index + 3),
          arr[index],
          ...arr.slice(index + 3)
        ];
      } else {
        arr = [
          ...arr.slice(0, index),
          ...arr.slice(index + 1, index + 3),
          arr[index],
          ...arr.slice(index + 3)
        ];
        index = arr.indexOf(7, index - 1);
      }
    } else {
      index++;
    }
  }

  return arr;
};