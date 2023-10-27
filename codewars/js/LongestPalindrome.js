// https://www.codewars.com/kata/54bb6f887e5a80180900046b

const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

const longestPalindrome = (str) => {
  const palindromes = [str.charAt(0)];
  for (let i = 0; i < str.length; i++) {
    for (let j = str.length - 1; j > i; j--) {
      const from = str.indexOf(str.charAt(i), j) + 1;
      const substr = str.substring(i, from);
      if (isPalindrome(substr) && from > 0) {
        palindromes.push(substr);
        break;
      }
    }
  }

  return str.length !== 0
    ? Math.max(...palindromes.map(s => s.length))
    : 0;
};

console.log(longestPalindrome("r0r"), 3);
console.log(longestPalindrome("r r"), 3);
console.log(longestPalindrome("a"), 1);
console.log(longestPalindrome("aa"), 2);
console.log(longestPalindrome("baa"), 2);
console.log(longestPalindrome("aab"), 2);
console.log(longestPalindrome("zyabyz"), 1);
console.log(longestPalindrome("BaaBcd"), 4);
console.log(longestPalindrome("baablkj12345432133d"), 9);
console.log(longestPalindrome(""), 0);
console.log(longestPalindrome("Aa"), 1);
console.log(longestPalindrome("LSUo6pyBTLgD5yaT3QjjrjNrL9sHjBEBZqQ3NWOmTxBxTmOWN3QqZBEBjHs9LrNjrjjQ3Tay5DgLTByp6oUS"), 83);