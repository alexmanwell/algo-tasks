// https://www.codewars.com/kata/5dcde0b9fcb0d100349cb5c0

const palindrome = (str, left, right) => {
  const isValid = (left, right) => left >= 0 && right < str.length;
  while (isValid(left, right) && str[left] === str[right]) {
    left--;
    right++;
  }

  return str.substring(left + 1, right);
};

const longest_palindrome = (s) => {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const a = palindrome(s, i, i);
    const b = palindrome(s, i, i + 1);
    if (a.length > result.length) {
      result = a;
    }
    if (b.length > result.length) {
      result = b;
    }
  }

  return result;
};