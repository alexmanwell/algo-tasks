// https://www.youtube.com/watch?v=L2RPLVLKiAY
// timeline position 00:13:29 сортировка от большего к меньшему, деструктуризация и клон массива

const descSortingByHeight = (names, heights) => {
  return names
    .map((name, index) => [name, heights[index]])
    .sort(([, height1], [, height2]) => {
      return height2 - height1
    })
    .map(([name]) => name);
};

console.log(descSortingByHeight(
  ["Tom", "Mary", "John", "Emma", "Ella"],
  [165, 180, 165, 170, 170])
);