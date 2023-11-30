// https://www.codewars.com/kata/52a112d9488f506ae7000b95

const isIntArray = (arr) => {
  if (!arr) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i])) {
      return false;
    }
  }

  return true;
};