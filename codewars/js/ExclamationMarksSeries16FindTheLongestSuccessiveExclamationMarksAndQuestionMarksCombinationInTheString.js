// https://www.codewars.com/kata/57fb3c839610ce39f7000023

const changeSign = (s) => {
  return s === "!" ? "?" : "!";
}

const hasVariousSigns = (str) => {
  return new Set(str).size !== 1;
}

const size = (str) => {
  return str.length;
}

const find = (s) => {
  let result = "";
  let index = 0;
  while (index < s.length - 1) {
    let sign = s[index];
    let substr = sign;
    while (s[index + 1] === sign) {
      ++index;
      substr += sign;
    }
    sign = changeSign(s[index]);
    let fixIndexChangeSign = index + 1;
    while (s[index + 1] === sign) {
      ++index;
      substr += sign;
    }
    if (hasVariousSigns(substr) && size(result) < size(substr)) {
      result = substr;
    }
    index = fixIndexChangeSign;
  }

  return result;
};