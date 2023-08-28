// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

const uniqueInOrder = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const [current, next] = [arr[i], arr[i + 1]];
    if (current !== next) {
      result.push(current);
    }
  }

  return result;
};