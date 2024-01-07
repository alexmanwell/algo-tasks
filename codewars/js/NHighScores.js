// https://www.codewars.com/kata/5ad0fdf461c493cc09000036
// TODO: Решено правильно, однако тесты не проходят, понять почему не могу.
//  Есть мысль, что у меня здесь более свежая nodejs, а в codewars используется nodejs 8.1.3;

const topScores = (records, top) => {
  if (top < 0) {
    return [];
  }
  records.sort(([n1, r1], [n2, r2]) => r2 - r1);
  let obj = {};
  for (const [name, record] of records) {
    if (!obj[name]) {
      obj[name] = record;
    }
    if (obj[name] < record) {
      obj[name] = record;
    }
  }

  let result = [];
  for (let key in obj) {
    result.push([key, obj[key]]);
  }

  return result
    .slice(0, top)
    .sort(([n1, r1], [n2, r2]) => n1.localeCompare(n2))
    .sort(([n1, r1], [n2, r2]) => r2 - r1)
};

console.log(topScores([["Alice", 55], ["Jane", 12], ["Jim", 88], ["Bob", 66]], 4));
console.log(topScores([
    ['Marinda', 100],
    ['Marinda', 120],
    ['Johnette', 132],
    ['Reynalda', 42],
    ['Yolande', 86],
    ['Yolande', 90],
    ['Nakia', 12],
    ['Ambrose', 44],
    ['Shanti', 23],
    ['Sarai', 77],
    ['Karon', 344],
    ['Maire', 1000],
    ['Maire', 1010],
    ['Tennille', 123],
    ['Porsha', 645],
    ['Hyacinth', 234],
    ['Duncan', 99],
    ['Chelsey', 10],
    ['Echo', 65],
    ['Taryn', 34],
    ['Loise', 12],
    ['Domenica', 43],
    ['Doug', 23]
  ], 10
));

console.log(topScores([
  ['Yolanda', 164],
  ['Kattie', 745],
  ['Douglas', 575],
  ['Douglas', 494],
  ['Yolanda', 140],
  ['Karon', 553],
  ['Kattie', 250],
  ['Ellie', 447],
  ['Kurt', 529],
  ['Lesley', 796],
  ['Reynalda', 780],
  ['Domenica', 819],
  ['Domenica', 535],
  ['Reynalda', 529],
  ['Kattie', 658],
  ['Marinda', 960],
  ['Tony', 405],
  ['Tony', 836],
  ['Domenica', 243],
  ['Douglas', 193],
  ['Karon', 694],
  ['Marinda', 394],
  ['Echo', 163],
  ['Karon', 313],
  ['Douglas', 908],
  ['Douglas', 951],
  ['Marinda', 578],
  ['Johnette', 633],
  ['Lesley', 711],
  ['Karon', 499],
  ['Ellie', 690],
  ['Karon', 600],
  ['Marinda', 915],
  ['Ellie', 383],
  ['Marinda', 957],
  ['Reynalda', 335],
  ['Douglas', 897],
  ['Lesley', 219],
  ['Douglas', 852],
  ['Douglas', 119],
  ['Chris', 658],
  ['Karon', 502],
  ['Yolanda', 619],
  ['Marinda', 583],
  ['Yolanda', 255],
  ['Tony', 570],
  ['Lesley', 753],
  ['Tony', 264],
  ['Karon', 641],
  ['Marinda', 194],
  ['Karon', 935],
  ['Yolanda', 813],
  ['Kurt', 510],
  ['Domenica', 329],
  ['Domenica', 836],
  ['Chris', 864],
  ['Karon', 685],
  ['Johnette', 443],
  ['Ellie', 297],
  ['Kurt', 268],
  ['Karon', 871],
  ['Kattie', 818],
  ['Ellie', 977],
  ['Karon', 248],
  ['Kurt', 680],
  ['Kurt', 369],
  ['Karon', 765],
  ['Tony', 500],
  ['Ellie', 255],
  ['Douglas', 485],
  ['Yolanda', 512],
  ['Ellie', 675],
  ['Karon', 426]
], 22));

console.log(topScores([
  ['Josephine', 101],
  ['Jackson', 102],
  ['Jet', 101],
  ['Jill', 101],
  ['Joel', 102],
  ['John', 101],
  ['Joe', 101],
  ['John', 100],
  ['Jeremy', 101],
  ['Jared', 101],
  ['Jeremy', 100],
  ['Jared', 100],
  ['Judy', 100],
  ['Jude', 102],
  ['Jackson', 101],
  ['Jude', 100],
  ['Jeremy', 102],
  ['Jill', 102],
  ['Jackson', 101],
  ['Josephine', 100],
  ['Jared', 102],
  ['Jackson', 101]
], 11));