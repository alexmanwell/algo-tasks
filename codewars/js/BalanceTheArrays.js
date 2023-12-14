// https://www.codewars.com/kata/58429d526312ce1d940000ee

const dictionary = (arr) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1;
  }

  return Object
    .values(map)
    .sort((a, b) => a - b);
};

const balance = (arr1, arr2) => {
  const values = dictionary(arr1);
  const values2 = dictionary(arr2);

  return values.length === values2.length
    && !values.filter((v, index) => v !== values2[index]).length;
};