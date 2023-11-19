// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

const hexStringToRGB = (hex) => {
  const list = hex.substring(1).match(/(.){2}/g);
  let rgb = new Array(3);
  list.forEach((color, index) => {
    rgb[index] = Number("0x" + color);
  });

  return {r: rgb[0], g: rgb[1], b: rgb[2]};
};