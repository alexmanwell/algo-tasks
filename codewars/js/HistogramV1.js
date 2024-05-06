// https://www.codewars.com/kata/57c6c2e1f8392d982a0000f2

const findMax = (arr) => {
  let max = Number.MIN_SAFE_INTEGER;
  for (let n of arr) {
    if (n > max) {
      max = n;
    }
  }

  return max;
}

const makeHistogram = (arr) => {
  let histogram = new Array(arr.length).fill([]);
  const max = findMax(arr);
  const height = max + 3;
  for (let i = 0; i < arr.length; i++) {
    let line = new Array(height);
    let index = 0;
    while (index < max - arr[i]) {
      line[index] = " ";
      index++;
    }
    line[index] = arr[i] === 0 ? " " : arr[i];
    index++;
    while (index <= max) {
      line[index] = "#";
      index++;
    }
    line[index] = i < arr.length - 1 ? "--" : "-";
    index++;
    line[index] = i + 1;
    histogram[i] = line;
  }

  return histogram;
}

const print = (histogram) => {
  const height = histogram[0].length;
  let result = "";
  for (let col = 0; col < height; col++) {
    let str = "";
    for (let row = 0; row < histogram.length; row++) {
      if (col < height - 2) {
        str += histogram[row][col] + " ";
      }
      if (col === height - 2) {
        str += histogram[row][col];
      }
      if (col === height - 1) {
        str += histogram[row][col] + ((row < histogram.length - 1) ? " " : "");
      }
    }
    if (col < height - 2) {
      let end = str.lastIndexOf("#");
      let numberIndex = 0;
      for (let i = 0; i < str.length; i++) {
        let number = "";
        while (str[i] !== " " && /[0-9]/.test(str[i])) {
          number += str[i];
          i++
        }
        if (number.length) {
          i--;
        }
        if (str[i] !== " " && Number.isInteger(+number)) {
          numberIndex = i;
        }
      }
      str = str.substring(0, numberIndex > end ? numberIndex + 1 : end + 1);
    }
    result += (str.trim().length === 0) ? "" : str + "\n";
  }

  return result;
}

const histogram = (arr) => {
  if (!arr.length) {
    return "";
  }

  return print(makeHistogram(arr));
};