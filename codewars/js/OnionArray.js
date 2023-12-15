// https://www.codewars.com/kata/59b2883c5e2308b54d000013

const isOnionArray = (arr) => {
  const size = arr.length - 1;
  let isOnion = true;
  for (let i = 0; i <= size / 2; i++) {
    if (i === size - i || !isOnion) {
      break;
    }
    isOnion =
      (arr[i] + arr[size - i] <= 10)
      && (i !== size - i);
  }

  return isOnion;
};