// https://www.codewars.com/kata/58b3c2bd917a5caec0000017

const sumGroups = (arr) => {
  let index = 0;
  let result = [arr[0]];
  while (index < arr.length - 1) {
    if ((result[index] + arr[index + 1]) % 2 !== 0) {
      result.push(arr[index + 1]);
      index++;
    }
    if ((result[index] + arr[index + 1]) % 2 === 0) {
      let sum = 0;
      for (let i = index; i < arr.length; i++) {
        if ((arr[i] + arr[i + 1]) % 2 === 0) {
          sum += arr[i + 1];
        } else {
          index = result.length - 1;
          result[index] += sum;
          arr = [...result, ...arr.slice(i + 1)];
          break;
        }
      }
    }
    if ((result[index - 1] + result[index]) % 2 ===0) {
      const item = result.pop();
      index = result.length - 1;
      result[index] += item;
    }
  }

  return result.length;
};