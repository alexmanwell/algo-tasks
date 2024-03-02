// https://www.codewars.com/kata/537400e773076324ab000262

const sortedLetters = (str) => {
  return str
    .split("")
    .sort((a, b) =>
      a.localeCompare(b)
    )
    .join("");
};

const groupAnagrams = (words) => {
  let map = new Map();
  for (let word of words) {
    const sorted = sortedLetters(word);
    map.set(
      sorted,
      map.has(sorted)
        ? [...map.get(sorted), word]
        : [word]
    );
  }

  return [...map.values()]
    .sort((a, b) =>
      b.length - a.length
    );
};