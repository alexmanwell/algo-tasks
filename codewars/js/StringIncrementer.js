// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

const findDigitIndex = (str) => {
  let index = -1;
  const arr = str.split("");
  for (let i = arr.length - 1; i >= 0; i--) {
    if (new RegExp(/[0-9]/g).test(arr[i])) {
      index = i;
    } else {
      break;
    }
  }

  return index;
};

const incrementString = (str) => {
  const index = findDigitIndex(str);
  let digits;
  if (index !== -1) {
    digits = str
      .substring(index)
      .split("")
      .map(Number);

    let digitDepth = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
      digits[i] = digits[i] + digitDepth;
      if (digits[0] === 10) {
        break;
      }
      if (digits[i] === 10) {
        digits[i] = 0;
        digitDepth = 1;
      } else {
        digitDepth = 0;
      }
    }
  }

  return (digits) ? str.substring(0, index) + digits.join("") : str + "1";
};