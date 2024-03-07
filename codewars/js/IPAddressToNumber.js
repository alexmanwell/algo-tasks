// https://www.codewars.com/kata/541a354c39c5efa5fa001372

const BYTE = 8;

const ipToNum = (ip) => {
  const bits = ip
    .split(".")
    .map(bit =>
      Number(bit)
        .toString(2)
        .split("")
    );
  for (let bit of bits) {
    const size = bit.length;
    for (let i = 0; i < BYTE - size; i++) {
      bit.unshift("0");
    }
  }

  const digits = bits.map(bit => bit.join("")).join("");
  return Number(BigInt('0b' + digits));
};

const numToIp = (num) => {
  return Number(num)
    .toString(2)
    .split("")
    .reverse()
    .join("")
    .match(/.{1,8}/g)
    .map(bit =>
      bit
        .split("")
        .reverse()
        .join("")
    )
    .map(bit =>
      parseInt(bit, 2)
    )
    .reverse()
    .join(".");
};