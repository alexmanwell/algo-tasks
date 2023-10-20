// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001

const ISBN_10_MODULAR = 11;

const validISBN10 = (isbn) => {
  const length = isbn.length;
  const value = isbn.split("").slice(0, length - 1).map(Number);
  const lastValue = isbn
    .split("")
    .slice(length - 1)
    .map(n => n !== "X" ? Number(n) : 10);

  return length === 10 && new RegExp(/\d{9}[\d|X]/).test(isbn)
    ? [...value, lastValue].reduce((acc, number, index) => {
    return acc + number * (index + 1)
  }, 0) % ISBN_10_MODULAR === 0
    : false;
};