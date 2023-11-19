// https://www.codewars.com/kata/52945ce49bb38560fe0001d9

const pascal = (depth) => {
  const triangles = [];
  for (let i = 0; i < depth; i++) {
    const triangle = [1];
    for (let j = 1; j < i; j++) {
      triangle.push(triangles[i - 1][j - 1] + triangles[i - 1][j]);
    }
    if (i > 0) {
      triangle.push(1);
    }
    triangles.push(triangle);
  }

  return triangles;
};