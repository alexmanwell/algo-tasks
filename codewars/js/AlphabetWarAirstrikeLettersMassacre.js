// https://www.codewars.com/kata/5938f5b606c3033f4700015a

const LEFT_SIDE = {
  w: 4,
  p: 3,
  b: 2,
  s: 1
};

const RIGHT_SIDE = {
  m: 4,
  q: 3,
  d: 2,
  z: 1
};

const alphabetWar = (fight) => {
  let arr = fight.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "*") {
      if (i === 0) {
        arr[0] = "_";
      } else {
        arr[i - 1] = "_";
      }
      if (i === arr.length) {
        arr[arr.length - 1] = "_";
      } else {
        arr[i + 1] = arr[i + 1] !== "*" ? "_" : arr[i + 1];
      }
      arr[i] = "_";
    }
  }
  arr = arr.filter(v => v !== "_");

  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (Object.keys(LEFT_SIDE).includes(arr[i])) {
      left.push(LEFT_SIDE[arr[i]]);
    }
    if (Object.keys(RIGHT_SIDE).includes(arr[i])) {
      right.push(RIGHT_SIDE[arr[i]]);
    }
  }
  const sumLeft = left.reduce((acc, v) => acc + v, 0);
  const sumRight = right.reduce((acc, v) => acc + v, 0);

  return sumLeft > sumRight ? "Left side wins!" :
    sumLeft < sumRight ? "Right side wins!" : "Let's fight again!";
};