// https://www.codewars.com/kata/52e88b39ffb6ac53a400022e

const int32ToIp = (int32) => {
  const BYTE = 8;
  const OCTETS = 4;
  let ip = [];
  for (let i = OCTETS - 1; i >= 0; i--) {
    let subIp = 0;
    for (let j = BYTE - 1; j >= 0; j--) {
      let octet = 2 ** j;
      const diff = 2 ** (BYTE * i) * octet;
      if ((int32 - diff) >= 0) {
        subIp += octet;
        int32 -= diff;
      }
    }
    ip.push(subIp);
  }

  return ip.join(".");
};