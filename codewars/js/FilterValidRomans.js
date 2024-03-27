// https://www.codewars.com/kata/58334362c5637ad0bb0001c2

const ROMANS = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"].reverse();

const UNIQUE_ROMANS = ["V", "L", "D"];

const validRomans = (arr) => {
  arr = arr.filter(item => item.length);
  let result = [];
  next:
    for (let item of arr) {
      for (let roman of UNIQUE_ROMANS) {
        if ([...item].filter(r => r === roman).length > 1) {
          continue next;
        }
      }
      let i = 0;
      let from = 0;
      let isValidRoman = true;
      while (i < item.length) {
        if (ROMANS.includes((item[i] + item[i + 1]), from)) {
          from = ROMANS.indexOf(item[i] + item[i + 1]);
          i += 2;
          if (ROMANS[from] === item[i]) {
            isValidRoman = false;
            break;
          }
          if (item.includes(ROMANS[from][0], i)) {
            const index =
              [...item]
                .findIndex((r, index) =>
                  ROMANS[from][0] && index > i
                );
            if (!ROMANS.includes((item[index - 1] + item[index]), from)) {
              isValidRoman = false;
              break;
            }
          }
        } else if (ROMANS.includes(item[i], from)) {
          from = ROMANS.indexOf(item[i]);
          i++;
        } else {
          isValidRoman = false;
          break;
        }
      }
      if (isValidRoman) {
        result.push(item);
      }
    }

  return result;
};