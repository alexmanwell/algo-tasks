// https://www.codewars.com/kata/59a8782bdbe3b04e740000cd

const DISCS = [20, 15, 10, 5, 2.5, 1.25];
const NECK = 20;

const sum = (init, arr) => {
  return arr
    .reduce((acc, disc) =>
      acc + 2 * disc
      , init
    );
};

const liftingCalc = (totalWeight) => {
  if (totalWeight < 20) {
    return false;
  }
  let barbell = [];
  let weight = totalWeight - NECK;
  let copiedDiscs = [...DISCS];
  const minWeightDisc = DISCS[DISCS.length - 1];
  while (weight > 2 * minWeightDisc ||
        copiedDiscs.length) {
    const disc = copiedDiscs.shift();
    while (2 * disc <= weight) {
      barbell.push(disc);
      weight -= 2 * disc;
    }
  }

  return sum(NECK, barbell) === totalWeight
    ? barbell
    : false;
};