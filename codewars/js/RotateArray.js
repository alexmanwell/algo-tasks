// https://www.codewars.com/kata/54f8b0c7a58bce9db6000dc4

const rotate = (arr, n) => {
  if (n === 0) {
    return arr;
  }
  const offset = n % arr.length;
  const direction = n > 0 ? "RIGHT" : "LEFT";
  let result = new Array(arr.length).fill(null);
  if (direction === "RIGHT") {
    for (let i = 0; i < arr.length; i++) {
      let shift = i + offset;
      if (shift > arr.length - 1) {
        shift = shift - arr.length;
      }
      result[shift] = arr[i];
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      let shift = i + offset;
      if (shift < 0) {
        shift = arr.length + shift;
      }
      result[shift] = arr[i];
    }
  }

  return result;
};