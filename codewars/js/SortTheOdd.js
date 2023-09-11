// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

const sortArray = (array) => {
  const oddSorted = array.filter(item => item % 2).sort((a, b) => a - b);
  return array.map((value) => value % 2 ? oddSorted.shift() : value);
};