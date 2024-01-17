// https://www.codewars.com/kata/5551dc71101b2cf599000023

const maxPizza = (cuts) => {
  if (cuts < 0) {
    return -1;
  }
  let result = 1;
  for (let i = 0; i <= cuts; i++) {
    result += i;
  }

  return result;
};