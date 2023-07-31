// https://www.codewars.com/kata/52ea928a1ef5cfec800003ee

const ipToInt32 = (ip) =>{
    const BYTE = 8;
    const BIT = 2;
    return ip.split(".").reduce((total, octet, index, octets) => {
        return total + octet * Math.pow(BIT, (octets.length - 1 - index) * BYTE);
    }, 0);
};