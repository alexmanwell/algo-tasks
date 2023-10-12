// https://www.codewars.com/kata/5a2c22271f7f709eaa0005d3

const checkPalindrome = (letters) => {
  return [...letters].reverse().join("") === letters.join("")
};

const solve = (s) => {
  const letters = s.split("");
  let isPalindrome = checkPalindrome(letters);
  let isRemove = false;
  if (!isPalindrome) {
    for (let i = 0; i < letters.length; i++) {
      const copyLetters = [...letters];
      copyLetters.splice(i, 1);
      if (checkPalindrome(copyLetters)) {
        isRemove = true;
      }
    }
  }

  return isPalindrome ? "OK" : isRemove ? "remove one" : "not possible";
};