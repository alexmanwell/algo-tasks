// https://www.codewars.com/kata/60cc93db4ab0ae0026761232

const createArray = (size) => {
  size = size % 2 === 0 ? size : size + 1;
  return new Array(size);
}

const arrange = (arr) => {
  const size = arr.length;
  let result = createArray(size);
  let isReverse = false;
  let index = 0;
  while (index < size / 2) {
    const current = arr[index];
    const next = arr[size - 1 - index];
    if (!isReverse) {
      result[2 * index] = current;
      result[2 * index + 1] = next;
      isReverse = true;
    } else {
      result[2 * index] = next;
      result[2 * index + 1] = current;
      isReverse = false;
    }
    index++;
  }
  if (size % 2 !== 0) {
    result.pop();
  }

  return result;
};