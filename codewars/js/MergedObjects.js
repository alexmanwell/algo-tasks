// https://www.codewars.com/kata/596cf5b0e1665a2d02000007

const objConcat = (objects) => {
  let result = {};
  for (const obj of objects) {
    for (const key in obj) {
      result[key] = obj[key];
    }
  }

  return result;
};