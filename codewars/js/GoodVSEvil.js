// https://www.codewars.com/kata/52761ee4cffbc69732000738

const WORTH_OF_GOODNESS_UNITS = [1, 2, 3, 3, 4, 10];
const WORTH_OF_EVIL_UNITS = [1, 2, 2, 2, 3, 5, 10];

const powerOfSide = (side, worth) => {
  return side.split(" ").reduce((acc, unit, index) => {
    return acc + unit * worth[index]
  }, 0);
};

const goodVsEvil = (good, evil) => {
  const powerOfGoodness = powerOfSide(good, WORTH_OF_GOODNESS_UNITS);
  const powerOfEvil = powerOfSide(evil, WORTH_OF_EVIL_UNITS);

  return powerOfGoodness > powerOfEvil
    ? "Battle Result: Good triumphs over Evil"
    : powerOfGoodness < powerOfEvil
      ? "Battle Result: Evil eradicates all trace of Good"
      : "Battle Result: No victor on this battle field"
};