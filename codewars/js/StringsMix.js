// https://www.codewars.com/kata/5629db57620258aa9d000014

const countLetters = (s1) => {
  const map = new Map();
  const letters = s1.split("");
  for (const letter of letters) {
    if (/[a-z]/.test(letter)) {
      map.set(letter, map.has(letter) ? map.get(letter) + 1 : 1);
    }
  }
  for (const [letter, amount] of map.entries()) {
    if (amount === 1) {
      map.delete(letter);
    }
  }

  return Object.fromEntries(
    [...map.entries()]
      .sort((a, b) =>
        b[1] - a[1]
      )
  );
};

const sortMapByIncreaseValues = (map) => {
  for (let [_, list] of map.entries()) {
    list.sort((a, b) => a.localeCompare(b));
    let last = 0;
    let index = 0;
    while (index < list.length - last) {
      for (let letter of list[index]) {
        if (letter === "=") {
          list.push(list.shift());
          last++;
          break;
        } else {
          index++;
        }
      }
    }
  }

  return map.values();
}

const mix = (s1, s2) => {
  const countOfLettersS1 = countLetters(s1);
  const countOfLettersS2 = countLetters(s2);
  let set = new Set([
      ...Object.keys(countOfLettersS1),
      ...Object.keys(countOfLettersS2)
    ]
  );
  let map = new Map();
  for (let letter of set) {
    const a = countOfLettersS1[letter];
    const b = countOfLettersS2[letter];
    const valueByA = `1:${letter.repeat(a)}/`;
    const valueByB = `2:${letter.repeat(b)}/`;
    if (a && b) {
      if (a > b) {
        map.set(a, map.has(a) ? [...map.get(a), valueByA] : [valueByA]);
      } else if (a < b) {
        map.set(b, map.has(b) ? [...map.get(b), valueByB] : [valueByB]);
      } else {
        const equalLetters = `=:${letter.repeat(a)}/`;
        map.set(a, map.has(a) ? [...map.get(a), equalLetters] : [equalLetters]);
      }
    } else if (!a && b) {
      map.set(b, map.has(b) ? [...map.get(b), valueByB] : [valueByB]);
    } else {
      map.set(a, map.has(a) ? [...map.get(a), valueByA] : [valueByA]);
    }
  }

  return [...sortMapByIncreaseValues(map)]
    .flat()
    .join("")
    .slice(0, -1);
};