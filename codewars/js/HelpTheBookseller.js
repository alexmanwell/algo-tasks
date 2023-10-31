// https://www.codewars.com/kata/54dc6f5a224c26032800005c

const stockList = (listOfArt, listOfCat) => {
  const articles = listOfArt.map(article => article.split(" "));
  const map = new Map();
  for (let label of listOfCat) {
    map.set(label, 0);
  }

  for (let [article, value] of articles) {
    const label = article[0];
    value = Number(value);
    const hasCategory = map.has(label);
    if (hasCategory) {
      map.set(label, hasCategory ? map.get(label) + value : value);
    }
  }

  return listOfArt.length === 0 || listOfCat.length === 0
    ? ""
    : [...map.entries()]
      .map(([category, value]) => {
        return `(${category} : ${value})`
      })
      .join(" - ");
};