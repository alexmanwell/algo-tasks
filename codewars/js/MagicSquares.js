// https://www.codewars.com/kata/58c979aafd407d6e9f000071

const getSumsHorizontal = (arr) => {
  let results = [];
  for (let row = 0; row < arr.length; row++) {
    let sum = 0;
    for (let col = 0; col < arr.length; col++) {
      sum += arr[row][col];
    }
    results.push(sum);
  }

  return results;
};

const getSumsVertical = (arr) => {
  let results = [];
  for (let col = 0; col < arr.length; col++) {
    let sum = 0;
    for (let row = 0; row < arr.length; row++) {
      sum += arr[row][col];
    }
    results.push(sum);
  }

  return results;
};

const getSumDiagonal = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i];
  }

  return sum;
}

const getSumBackDiagonal = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][arr.length - 1 - i];
  }

  return sum;
}

const isValidMatrix = (arr) => {
  for (let row = 0; row < arr.length; row++) {
    if (!arr[row]) {
      return false;
    }
    for (let col = 0; col < arr[row].length; col++) {
      if (!/[0-9]/.test(arr[row][col])) {
        return false;
      }
    }
  }

  return true;
}

const magicSquare = (arr) => {
  if (!arr.length) {
    return false;
  }
  if (!isValidMatrix(arr)) {
    return false;
  }

  const a = getSumDiagonal(arr);
  return [
    ...getSumsHorizontal(arr),
    ...getSumsVertical(arr),
    getSumBackDiagonal(arr),
    a
  ].every(item => item === a);
};