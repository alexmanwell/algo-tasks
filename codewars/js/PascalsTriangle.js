// https://www.codewars.com/kata/5226eb40316b56c8d500030f

const pascalsTriangle = (n) => {
  const triangles = [];
  for (let i = 0; i < n; i++) {
    let triangle = [1];
    for (let j = 1; j < i; j++) {
      triangle.push(triangles[i - 1][j - 1] + triangles[i - 1][j]);
    }
    if (i > 0) {
      triangle.push(1);
    }
    triangles.push(triangle);
  }

  return triangles.flat();
};