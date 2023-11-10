// https://www.codewars.com/kata/5783ef69202c0ee4cb000265

const LENGTH = 2;

const searchArray = (array, query) => {
  if (!Array.isArray(query)) {
    throw new Error("Invalid input query");
  }
  const length = query.length;
  if (length !== LENGTH) {
    throw new Error("Invalid length query");
  }
  if (array.filter(item => item.length !== length).length !== 0) {
    throw new Error("Invalid length item in the array");
  }
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < length; j++) {
      index = array[i][j] === query[j] ? i : -1;
      if (index === -1) {
        break;
      }
    }
    if (index !== -1) {
      break;
    }
  }

  return index;
};