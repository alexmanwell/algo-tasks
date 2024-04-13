// https://www.codewars.com/kata/57fb1705f815ebd49e00024c

const changeSign = (s) => {
  return s === "!" ? "?" : "!";
};

const computePrime = (n) => {
  let div = 2;
  let result = 0;
  while (n > 1) {
    if (n % div === 0) {
      result = n;
      n /= div;
    } else {
      div++;
    }
  }

  return result;
};

const convert = (s) => {
  let numbers = [];
  let index = 0;
  while (index < s.length) {
    let sign = s[index];
    let count = 1;
    while (s[index + 1] === sign) {
      ++index;
      count++;
    }
    numbers.push(count);
    count = 0;
    sign = changeSign(s[index]);
    while (s[index + 1] === sign) {
      ++index;
      count++;
    }
    if (count !== 0) {
      numbers.push(count);
    }
    ++index;
  }

  return computePrime(+numbers.join(""));
};