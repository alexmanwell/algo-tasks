// https://www.codewars.com/kata/652643925c042100247fffc6

const BOX_SIZE = {
  SINGLE: 1,
  TEN: 10,
  FIFTY: 50
};

const BOX_TYPE = new Map([
  [BOX_SIZE.SINGLE, (item, amount) => `(${item.repeat(amount)})`],
  [BOX_SIZE.TEN, (item) => `{${item}}`],
  [BOX_SIZE.FIFTY, (item) => `[${item}]`]
]);

const addBoxToTier = (map, fruit, amount, size) => {
  const box = BOX_TYPE.get(size)(fruit, amount);
  map.set(size, map.has(size) ? map.get(size) + box : box);
};

const orderPlacementFruitsOnTheTiers = (tiers) => {
  const result = [];
  for (let boxFruits of tiers) {
    let tierSize = Math.max(...boxFruits.map((b) => b.length));
    const tier = [];
    for (let box of boxFruits) {
      tier.push("-".repeat(tierSize - box.length) + box);
    }

    result.push(tier);
  }

  return result;
};

const fruitPack = (orders) => {
  let tiers = [];
  for (let order of orders) {
    order = order.split("");
    const listOfFruits = [];
    while (order.length) {
      const index = order.findIndex(c => new RegExp(/\D/).test(c));
      const fruits = order.slice(0, index + 1).join("");
      listOfFruits.push([fruits[fruits.length - 1], fruits.slice(0, fruits.length - 1)]);
      order = order.slice(index + 1);
    }

    const tier = new Map([
      [BOX_SIZE.SINGLE, ""],
      [BOX_SIZE.TEN, ""],
      [BOX_SIZE.FIFTY, ""]
    ]);
    for (let [fruit, amount] of listOfFruits) {
      while (amount > 0) {
        if (amount >= BOX_SIZE.FIFTY) {
          addBoxToTier(tier, fruit, 0, BOX_SIZE.FIFTY);
          amount -= BOX_SIZE.FIFTY;
        } else if (amount >= BOX_SIZE.TEN) {
          addBoxToTier(tier, fruit, 0,BOX_SIZE.TEN);
          amount -= BOX_SIZE.TEN;
        } else if (amount > 0 && amount < BOX_SIZE.TEN) {
          addBoxToTier(tier, fruit, amount, BOX_SIZE.SINGLE);
          amount = 0;
        }
      }
    }
    tiers.push([...tier.entries()].map(([, value]) => value));
  }

  return orderPlacementFruitsOnTheTiers(tiers);
};