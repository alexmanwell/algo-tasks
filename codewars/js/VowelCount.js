// https://www.codewars.com/kata/54ff3102c1bad923760001f3

const getCount = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ((/[aeiouAEIOU]/).test(str[i])) {
      count++;
    }
  }

  return count;
};