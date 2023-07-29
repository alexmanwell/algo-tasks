// https://www.codewars.com/kata/5503013e34137eeeaa001648

const fillStars = (n) => {
  let countStars = 0;
  let stars = [];
  while (countStars <= n) {
    stars.push("*".repeat(countStars + 1) + "\n");
    countStars += 2;
  }

  return stars;
};

const fillSpaces = (arr, n) => {
  return arr.map((str, index) => {
    return " ".repeat(parseInt(n / 2 - index)) + arr[index];
  });
};

const reverse = (stars) => {
  return stars.slice(0, -1).reverse();
};

const diamond = (n) => {
  if (n < 1 || n % 2 === 0) {
    return null;
  }

  let stars = fillStars(n);
  let spaces = fillSpaces(stars, n);
  return (n > 1) ? [...spaces, ...reverse(spaces)].join("") : stars.join("");
};