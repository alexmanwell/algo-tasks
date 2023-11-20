// https://www.codewars.com/kata/525821ce8e7b0d240b002615

const camelize = (str) => {
  return str
    ? str
      .toLowerCase()
      .match(/[0-9a-zA-Z]+/gi)
      .map(v => {
        return v.charAt(0).toUpperCase() + v.substring(1)
      })
      .join("")
    : "";
};