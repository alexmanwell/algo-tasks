// https://www.codewars.com/kata/59daf400beec9780a9000045

const nameInStr = (str, name) => {
  name = name.toLowerCase();
  let index = -1;
  for (const letter of name) {
    const indexOf = str.indexOf(letter, index + 1);
    if (indexOf === -1) {
      return false;
    }
    index = indexOf;
  }

  return true;
};