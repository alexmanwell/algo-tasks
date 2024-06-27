// https://leetcode.com/problems/strong-password-checker-ii

const SPECIAL_CHARS = "!@#$%^&*()-+";

const isLowerCaseChar = c => {
  return new RegExp(/[a-z]/).test(c);
};

const isUpperCaseChar = c => {
  return new RegExp(/[A-Z]/).test(c);
};

const isSpecialChar = c => {
  return SPECIAL_CHARS.includes(c);
};

const isDigit = c => {
  return new RegExp(/[0-9]/).test(c);
};

/**
 * @param {string} password
 * @return {boolean}
 */
const strongPasswordCheckerII = (password) => {
  if (password.length < 8) {
    return false;
  }
  let hasLowerCaseChar = false;
  let hasUpperCaseChar = false;
  let hasSpecialChar = false;
  let hasDigit = false;
  for (let i = 0; i < password.length; i++) {
    const c = password[i];
    if (c === password[i + 1]) {
      return false;
    }
    if (isLowerCaseChar(c)) {
      hasLowerCaseChar = true;
      continue;
    }
    if (isUpperCaseChar(c)) {
      hasUpperCaseChar = true;
      continue;
    }
    if (isSpecialChar(c)) {
      hasSpecialChar = true;
      continue;
    }
    if (isDigit(c)) {
      hasDigit = true;
    }
  }

  return (
    hasLowerCaseChar &&
    hasUpperCaseChar &&
    hasSpecialChar &&
    hasDigit
  )
};