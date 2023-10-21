// https://www.codewars.com/kata/652643925c042100247fffc6

const BOX_CAPACITY = {
  SINGLE: 1,
  TEN: 10,
  HALF_OF_HUNDRED: 50
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
      const index = order.findIndex(c => new RegExp(/[a-z]/).test(c));
      const fruits = order.slice(0, index + 1).join("");
      listOfFruits.push([fruits[fruits.length - 1], fruits.slice(0, fruits.length - 1)]);
      order = order.slice(index + 1);
    }

    const tier = new Map([
      [BOX_CAPACITY.SINGLE, ""],
      [BOX_CAPACITY.TEN, ""],
      [BOX_CAPACITY.HALF_OF_HUNDRED, ""]
    ]);
    for (let [fruit, amount] of listOfFruits) {
      while (amount !== 0) {
        if (amount >= BOX_CAPACITY.HALF_OF_HUNDRED) {
          tier.set(
            BOX_CAPACITY.HALF_OF_HUNDRED,
            tier.has(BOX_CAPACITY.HALF_OF_HUNDRED)
              ? tier.get(BOX_CAPACITY.HALF_OF_HUNDRED) + `[${fruit}]`
              : `[${fruit}]`
          );
          amount -= BOX_CAPACITY.HALF_OF_HUNDRED;
        } else if (amount >= BOX_CAPACITY.TEN) {
          tier.set(
            BOX_CAPACITY.TEN,
            tier.has(BOX_CAPACITY.TEN)
              ? tier.get(BOX_CAPACITY.TEN) + `{${fruit}}`
              : `{${fruit}}`
          );
          amount -= BOX_CAPACITY.TEN;
        } else if (amount < BOX_CAPACITY.TEN) {
          const str = `(${fruit.repeat(amount)})`;
          tier.set(
            BOX_CAPACITY.SINGLE,
            tier.has(BOX_CAPACITY.SINGLE)
              ? tier.get(BOX_CAPACITY.SINGLE) + str
              : str
          );
          amount = 0;
        } else {
          tier.set(
            BOX_CAPACITY.SINGLE,
            tier.has(BOX_CAPACITY.SINGLE)
              ? tier.get(BOX_CAPACITY.SINGLE)
              : ""
          );
        }
      }
    }

    tiers.push(
      [...tier.entries()]
        .sort(([key1,], [key2,]) => key1 - key2)
        .map(([, value]) => value)
    );
  }

  return orderPlacementFruitsOnTheTiers(tiers);
};