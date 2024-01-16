// https://www.codewars.com/kata/543abbc35f0461d28f000c11

const houseOfCards = (floors) => {
  if (!Number.isInteger(floors) || floors < 1) {
    throw new Error(`Failed input amount of floors ${floors}, floors must be integer and greater than zero!`);
  }
  const tier = 2;
  let result = 0;
  let floor = 0;
  while (floor <= floors) {
    result += (1 + floor) * tier + floor;
    floor++;
  }

  return result;
};