// https://www.codewars.com/kata/59f08f89a5e129c543000069

const dup = (arr) => {
  const result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    let letters = "";
    for (let j = 0; j < word.length; j++) {
      if (word.charAt(j) !== word.charAt(j + 1)) {
        letters += word.charAt(j);
      }
    }
    result[i] = letters;
  }

  return result;
};