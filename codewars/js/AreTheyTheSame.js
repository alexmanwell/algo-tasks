// https://www.codewars.com/kata/550498447451fbbd7600041c

const compare = () => {
  return (a, b) => a - b;
};

const comp = (array1, array2) => {
  return (array1 && array2)
    ?
    array2.sort(compare()) &&
    array1
      .sort(compare())
      .every((value, index) => {
        return array2[index] === value ** 2;})
    : false
};