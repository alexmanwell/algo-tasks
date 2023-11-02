// https://www.codewars.com/kata/58a6af7e8c08b1e9c40001c1

const hammingDistance = (a, b) => {
  let xor = a ^ b;
  let distance = 0;

  while (xor ^ 0) {
    distance = (xor & 1) ? distance++ : distance;
    xor >>= 1;
  }

  return distance;
};