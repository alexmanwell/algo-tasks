// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

const multiplicationTable = (size) => {
  const result = [];
  let count= 1;
  while (count <= size) {
    const list = [];
    for (let i = 1; i <= size; i++) {
      list.push(i * count);
    }
    result.push(list);
    count++;
  }

  return result;
};