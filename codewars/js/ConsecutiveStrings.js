// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

const longestConsec = (strarr, k) => {
  let longest = "";
  for (let i = 0; k > 0 && i <= strarr.length - k; i++) {
    const tempStr = strarr.slice(i, i + k).join("");
    if (longest.length < tempStr.length) {
      longest = tempStr;
    }
  }

  return longest;
};