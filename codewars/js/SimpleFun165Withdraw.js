// https://www.codewars.com/kata/58afce23b0e8046a960000eb

const withdraw = (moneys) => {
  let banknotes = [0, 0, 0];
  const amount = Math.floor(moneys / 100);
  banknotes[0] = (moneys % 100 === 10 || moneys % 100 === 30)
    ? amount - 1
    : amount;
  moneys -= banknotes[0] * 100;

  banknotes[1] = moneys % 20 !== 0 ? moneys < 50 ? 0 : 1 : 0;
  moneys -= banknotes[1] * 50;

  banknotes[2] = moneys / 20;

  return banknotes;
};