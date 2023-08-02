// https://edabit.com/challenge/Kzmyf4pLx66ZRsnWk

const sumDigProd = (...arr) => {
  let result = arr.reduce((acc, number) => acc + number, 0);
  result = String(result).split("");
  while (result.length > 1) {
    let sum = 1;
    for (let elem of result) {
      sum *= parseInt(elem);
    }
    result = String(sum).split("");
  }

  return parseInt(result);
};