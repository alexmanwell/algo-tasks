// https://www.codewars.com/kata/528d36d7cc451cd7e4000339

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

const mostMoney = (students) => {
  let result = [];
  for (let st of students) {
    let sum = st.fives * 5 + st.tens * 10 + st.twenties * 20;
    result.push([st, sum]);
  }
  result = result.sort(([st1, v1], [st2, v2]) => v2 - v1);
  const max = Math.max(...result.map(([st, v]) => v));
  const filteredMaxValue = result.filter(([st, v]) => v === max);

  return result.length > 1 && filteredMaxValue.length === result.length
    ? "all"
    : filteredMaxValue.map(([st, v]) => st.name)[0];
};