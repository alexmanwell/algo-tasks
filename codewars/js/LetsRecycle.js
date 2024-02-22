// https://www.codewars.com/kata/5b6db1acb118141f6b000060

const recycle = (arr) => {
  const materials = ['paper', 'glass', 'organic', 'plastic'];
  return materials
    .map(item =>
      arr
        .filter(el =>
          (el.material === item || el.secondMaterial === item))
        .map(el => el.type)
    );
};