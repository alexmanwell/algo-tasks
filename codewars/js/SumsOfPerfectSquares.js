// https://www.codewars.com/kata/5a3af5b1ee1aaeabfe000084

Math.sqrtInt = (n) => {
  return Math.floor(Math.sqrt(n));
};

Math.square = (n) => {
  return Math.sqrtInt(n) ** 2;
};

const sumOfSquares = (n) => {
  let listOfSquares = [];
  for (let i = Math.sqrtInt(n); i > 0; i--) {
    let candidate = i * i;
    let number = n;
    let squares = [];
    while (number > 0) {
      candidate = Math.square(candidate);
      if (number - candidate >= 0) {
        squares.push(candidate);
        number -= candidate;
        candidate = number;
      } else {
        candidate--;
      }
    }
    listOfSquares.push(squares);
    number = n;
  }

  return Math.min(
    ...listOfSquares
      .map(s =>
        s.length)
  );
};