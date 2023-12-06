// https://www.codewars.com/kata/635b8fa500fba2bef9189473

const PHONE_KEYPAD = [" ", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

const countTouchKeys = (str) => {
  let separated = [];
  let value = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      value++;
    } else {
      separated.push([+str[i], value]);
      value = 1;
    }
  }

  return separated;
};

const phoneWords = (str) => {
  const separated = countTouchKeys(str);
  let sentence = "";
  for (let [key, value] of separated) {
    const length = PHONE_KEYPAD[key].length;
    if (key !== 1) {
      if (value >= 0) {
        while (value > 0) {
          sentence += PHONE_KEYPAD[key][value >= length ? length - 1 : (value - 1) % length];
          value -= (value >= length) ? length : length - 1;
        }
      } else {
        sentence += PHONE_KEYPAD[key][(value - 1) % length];
      }
    }
  }

  return sentence;
};