// https://www.codewars.com/kata/526dbd6c8c0eb53254000110

const alphanumeric = (string) => {
  let isValidate = true;
  if (!(/[a-zA-Z0-9-]$/).test(string)) {
    isValidate = false;
  }
  if ((/[_ -!]/g).test(string)) {
    isValidate = false;
  }

  return isValidate;
};