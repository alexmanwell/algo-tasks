// https://www.codewars.com/kata/5375f921003bf62192000746

const isPunctuationMarks = (char) => {
  return new RegExp(/[,.!?~]/).test(char);
};

const buildAbbr = (word) => {
  let result;
  const size = word.length;
  if (!isPunctuationMarks(word.charAt(word.length - 1))) {
    result = (size <= 3) ? word : word.charAt(0) + (size - 2) + word.charAt(size - 1);
  } else {
    result = (size <= 4) ? word : word.charAt(0) + (size - 3) + word.slice(size - 2);
  }

  return result;
};

const abbreviate = (str) => {
  const words = str.split(" ");
  const result = new Array(words.length);
  words.forEach((word, index) => {
    if (word.includes("-")) {
      const items = word.split("-");
      const abbrs = new Array(items.length);
      items.forEach((item, index) => {
        abbrs[index] = buildAbbr(item);
      });
      result[index] = abbrs.join("-");
    } else {
      result[index] = buildAbbr(word);
    }
  });

  return result.join(" ");
};

//another solution. Best solution.
const find = /[a-z]{4,}/gi;
const replace = (match) => {
  return match[0] + (match.length - 2) + match[match.length - 1];
};

const abbreviate = (str) => {
  return str.replace(find, replace);
};