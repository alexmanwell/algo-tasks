// https://www.codewars.com/kata/587e18b97a25e865530000d8

const ascendingSort = (str) => {
  return str.split("").sort().join("");
};

const compareStrings = (str1, str2) => {
  return ascendingSort(str1) === ascendingSort(str2);
};

const anagramCounter = (words) => {
  let count = 0;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (compareStrings(words[i], words[j])) {
        count++
      }
    }
  }

  return count;
};