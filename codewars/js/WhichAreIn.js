// https://www.codewars.com/kata/550554fd08b86f84fe000a58

const inArray = (array1, array2) => {
  let substringList = [];

  for (let subWord of array1) {
    for (let word of array2) {
      if (word.includes(subWord)) {
        substringList.push(subWord);
      }
    }
  }

  return [...new Set(substringList)].sort();
};

/*
second version solve
*/

const inArray = (array1, array2) => {
  let values = new Set();
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].includes(array1[i])) {
        values.add(array1[i]);
      }
    }
  }

  return Array.from(values).sort();
};