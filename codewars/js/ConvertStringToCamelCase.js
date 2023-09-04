// https://www.codewars.com/kata/517abf86da9663f1d2000003

const toCamelCase = (str) => {
  return (str)
    ? str
      .split(/[_-]/)
      .map((item, index) => {
        const firstLetter = String(item[0]);
        return (index === 0)
          ? firstLetter + item.slice(1)
          : firstLetter.toUpperCase() + item.slice(1);
      })
      .join("")
    : "";
};