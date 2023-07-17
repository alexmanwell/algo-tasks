// https://www.codewars.com/kata/515decfd9dcfc23bb6000006

const isDigit = (str) => {
  return (/^\d+$/).test(str);
};

const consistentDigit = (str) => {
  return str.length === String(parseInt(str)).length;
};

const isValidLength = (num) => {
  return parseInt(num) >= 0 && parseInt(num) <= 255;
};

const isValidIP = (str) => {
  let arr = str.split(".");
  if (arr.length !== 4) {
    return false;
  }

  let isInvalid = false;
  for (let i = 0; i < arr.length; i++) {
    isInvalid = !!(isDigit(arr[i]) && consistentDigit(arr[i]) && isValidLength(arr[i]));
    if (!isInvalid) {
      return false;
    }
  }

  return isInvalid;
};
