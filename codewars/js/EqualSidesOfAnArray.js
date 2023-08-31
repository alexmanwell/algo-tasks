const findEvenIndex = (arr) => {
  const sum = arr.reduce((acc, value) => acc + value);
  if (sum === arr[0]) {
    return 0;
  }
  if (sum === arr[arr.length - 1]) {
    return arr.length - 1;
  }

  let index = 1;
  while (index < arr.length - 1) {
    const reduceLeftSubArray = arr.slice(0, index).reduce((acc, value) => acc + value);
    const reduceRightSubArray = arr.slice(index + 1).reduce((acc, value) => acc + value);
    if (reduceLeftSubArray === reduceRightSubArray) {
      break;
    }
    index++;
  }

  return (index === arr.length - 1) ? -1 : index;
};