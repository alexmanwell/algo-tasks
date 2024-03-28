// https://www.codewars.com/kata/5267faf57526ea542e0007fb

Math.floor = (number) => {
  return Number.parseInt(String(number));
};

Math.ceil = (number) => {
  const floor = Number.parseInt(String(number));
  return (number && number - floor === 0)
    ? floor
    : number - floor > 0
      ? floor + 1
      : 0;
};

Math.round = (number) => {
  const floor = Number.parseInt(String(number));
  return number - floor >= 0.5 ? floor + 1 : floor;
};