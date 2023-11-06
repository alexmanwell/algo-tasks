// https://www.codewars.com/kata/5bcd90808f9726d0f6000091

const longestSubstringOf = (str) => {
  let uniques = "";
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let index = uniques.indexOf(char);
    if (index >= 0) {
      uniques = uniques.substring(index + 1);
    }
    uniques += char;
    max = Math.max(uniques.length, max);
  }

  return max;
};