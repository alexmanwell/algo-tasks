// https://www.codewars.com/kata/525c65e51bf619685c000059

const cakes = (recipe, available) => {
  for (let key of Object.keys(recipe)) {
    if (!Object.keys(available).includes(key)) {
      return 0;
    }
  }

  const values = [];
  for (let [key, value] of Object.entries(recipe)) {
    values.push(available[key] / value);
  }

  return Math.floor(Math.min(...values));
};