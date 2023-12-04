// https://www.codewars.com/kata/5227129b316b56d50d0003b7

const flattenTwoLevels = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(arr[i].flat(Infinity));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

const flattenTwoLevels = (arr) => {
  return arr.map(item =>
    Array.isArray(item) ? item.flat(Infinity) : item
  );
};

const flattenTwoLevels = (array) => {
  let result = [];

  for (let i = 0; i < array.length; i += 1) {
    if (Array.isArray(array[i])) {
      let flattenArr = flatten(array[i]);
      result.push(flattenArr);
    } else {
      result.push(array[i]);
    }
  }

  return result;
};

const flatten = (array) => {
  let result = [];
  let stack = [array];
  let lastItem;

  while (stack.length) {
    let lastItem = stack.pop();

    if (Array.isArray(lastItem)) {
      for (let i = 0; i < lastItem.length; i += 1) {
        stack.push(lastItem[i]);
      }
    } else {
      result.push(lastItem);
    }
  }

  return result.reverse();
};