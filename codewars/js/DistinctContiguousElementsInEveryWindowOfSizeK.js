// https://www.codewars.com/kata/5945f0c207693bc53100006b

const countContiguousDistinct = (k, arr) => {
  let result = new Array(arr.length - k + 1).fill(null);
  const subArr = arr.slice(0, k);
  let obj = {};
  for (let i = 0; i < subArr.length; i++) {
    obj[subArr[i]] = (obj[subArr[i]] || 0) + 1;
  }
  let uniques = Object.keys(obj).length;
  result[0] = uniques;
  for (let i = 0; i < arr.length - k; i++) {
    let first = Boolean(obj[arr[i]]);
    let last = Boolean(obj[arr[i + k]]);
    obj[arr[i]] = obj[arr[i]] - 1;
    obj[arr[i + k]] = (obj[arr[i + k]] || 0) + 1;
    let b = Boolean(obj[arr[i]]);
    if (b !== first) {
      --uniques;
    }
    b = Boolean(obj[arr[i + k]]);
    if (b !== last) {
      ++uniques;
    }
    result[i + 1] = uniques;
  }

  return result;
};