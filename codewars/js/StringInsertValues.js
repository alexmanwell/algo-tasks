// https://www.codewars.com/kata/529b54d9aba78c924d00088e

const format = (str, obj) => {
  let variables = new Set(str.match(new RegExp(/{(.*?)}/g)));
  for (const variable of variables) {
    while (str.includes(variable)) {
      const key = variable.substring(1, variable.length - 1);
      const value = obj[key];
      if (value || value === 0) {
        str = str.replaceAll(variable, value);
      } else {
        break;
      }
    }
  }

  return str;
};