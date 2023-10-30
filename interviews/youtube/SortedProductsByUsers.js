// https://www.youtube.com/watch?v=-nOG9Mm0za0

/*const remapData = (data) => {
  const result = new Map();
  for (let items of data) {
    const [product, users] = [items[0], items.slice(1)];
    for (let user of users) {
      result.set(user,
        result.has(user)
          ? [...result.get(user), product]
          : [product]
      );
    }
  }

  return Object.fromEntries(result);
};*/


//second solution, but I think previous solution is better then this.
const remapData = (data) => {
  const result = data.reduce((acc, items) => {
    const product = items[0];
    for (let i = 1; i < items.length; i++) {
      const user = items[i];
      if (acc[user]) {
        acc[user].push(product);
      } else {
        acc[user] = [product];
      }
    }

    return acc;
  }, {});

  return result;
};

console.log(remapData([
  ["Помидоры", "Аня", "Женя"],
  ["Огурцы", "Женя", "Аня"],
  ["Рис", "Аня", "Иван", "Саша"],
  ["Лосось", "Иван"],
]));