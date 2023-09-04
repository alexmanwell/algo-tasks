// https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript

const toUnderscore = (str) => {
  if (str.length === 0) {
    return "";
  }
  if (str.length === 1) {
    return str.toLowerCase();
  }

  return String(str).split(/(?=[A-Z])/).join("_").toLowerCase();
};