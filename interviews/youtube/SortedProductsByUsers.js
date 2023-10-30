// https://www.youtube.com/watch?v=-nOG9Mm0za0

const remapData = (data) => {
  const result = new Map();
  for (let items of data) {
    const [product, users] = [items[0], items.slice(1)];
    for (let user of users) {
      result.set(user, result.has(user) ? [...result.get(user), product] : [product]);
    }
  }

  return Object.fromEntries(result);
};

console.log(remapData([
  ["Помидоры", "Аня", "Женя"],
  ["Огурцы", "Женя", "Аня"],
  ["Рис", "Аня", "Иван", "Саша"],
  ["Лосось", "Иван"],
]));