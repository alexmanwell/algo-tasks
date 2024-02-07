// https://www.codewars.com/kata/58885a7bf06a3d466e0000e3

const pairOfShoes = (shoes) => {
  let map = new Map();
  for (const [type, size] of shoes) {
    const boot = type === 0 ? 1 : -1;
    map.set(size, map.has(size) ? map.get(size) + boot : boot);
  }

  return [...map.values()].every(v => v === 0);
};