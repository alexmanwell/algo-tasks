// https://www.codewars.com/kata/59c01248bf10a47bd1000046

const validPass = (password) => {
  return new RegExp(/^[A-Za-z0-9]{4,19}$/).test(password) &&
  new RegExp(/[0-9]+/).test(password) &&
  new RegExp(/[a-zA-Z]+/).test(password)
    ? "VALID"
    : "INVALID";
};