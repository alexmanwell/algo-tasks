// https://www.codewars.com/kata/58ab002d68ee07c57b000118

const toRange = (arr) => {
  arr = [...new Set(arr.sort((a, b) => a - b))];
  let result = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] === 1) {
      temp.push(arr[i], arr[i + 1]);
    } else {
      if (temp.length > 1) {
        const first = temp[0];
        const last = temp[temp.length - 1];
        result.push(`${first}_${last}`);
        temp = [];
      } else {
        result.push(arr[i]);
      }
    }
  }
  if (temp.length) {
    const first = temp[0];
    const last = temp[temp.length - 1];
    result.push(`${first}_${last}`);
  }

  return result.join(",");
};

const toArray = (str) => {
  let arr = str.split(",");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let [start, end] = arr[i].match(/-?\d+/g) || [];
    end = end ? end : start;
    for (let j = +start; j <= +end; j++) {
      result.push(j);
    }
  }

  return result;
};