// https://www.codewars.com/kata/652643925c042100247fffc6

const fruitPack = (orders) => {
  const result = [];
  for (let order of orders) {
    order = order.split("");
    const listOfFruits = [];
    while (order.length) {
      const index = order.findIndex(c => new RegExp(/[a-z]/).test(c));
      const fruits = order.slice(0, index + 1).join("");
      listOfFruits.push([fruits[fruits.length - 1], fruits.slice(0, fruits.length - 1)]);
      order = order.slice(index + 1);
    }

    const boxes = new Map();
    for (let [fruit, amount] of listOfFruits) {
      while (amount !== 0) {
        if (amount >= 50) {
          boxes.set(50, boxes.has(50) ? boxes.get(50) + `[${fruit}]` : `[${fruit}]`);
          amount -= 50;
        } else {
          boxes.set(50, boxes.has(50) ? boxes.get(50) : "");
        }
        if (amount >= 10 && amount < 50) {
          boxes.set(10, boxes.has(10) ? boxes.get(10) + `{${fruit}}` : `{${fruit}}`);
          amount -= 10;
        } else {
          boxes.set(10, boxes.has(10) ? boxes.get(10) : "");
        }
        if (amount > 0 && amount < 10) {
          const str = `(${fruit.repeat(amount)})`;
          boxes.set(1, boxes.has(1) ? boxes.get(1) + str : amount !== 0 ? str : "");
          amount = 0;
        } else {
          boxes.set(1, boxes.has(1) ? boxes.get(1) + "" : "");
        }
      }
    }
    result.push([...boxes.entries()]
      .sort(([key1,], [key2,]) => key1 - key2)
      .map(([, value]) => value));
  }

  const orderOnTheShelf = [];
  for (let box of result) {
    let length = Math.max(...box.map((b) => b.length));
    const orderInTheBox = [];
    for (let fruits of box) {
      orderInTheBox.push("-".repeat(length - fruits.length) + fruits);
    }
    orderOnTheShelf.push(orderInTheBox);
  }

  return orderOnTheShelf;
};