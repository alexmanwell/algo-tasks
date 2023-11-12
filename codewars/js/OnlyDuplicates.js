// https://www.codewars.com/kata/5a1dc4baffe75f270200006b

const onlyDuplicates = (str) => {
  const group = new Map();
  for (let letter of str) {
    group.set(letter, group.has(letter) ? group.get(letter) + 1 : 1);
  }

  return str.split("")
    .reduce((duplicates, letter) => {
      duplicates += (group.get(letter) > 1) ? letter : "";
      return duplicates;
    }, "");
};