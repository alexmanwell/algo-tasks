// https://www.codewars.com/kata/586e6d4cb98de09e3800014f

class VendingMachine {

  constructor(items, initMoney) {
    this.machineMoney = initMoney;
    this.items = [];
    for (const item of items) {
      this.items[item.code] = item;
    }
  }

  updateQuantity(itemCode) {
    return this.items[itemCode].quantity - 1;
  }

  vend(itemCode, insertedMoney) {
    let change;
    let changeLeft = 0;
    let message = "";
    itemCode = itemCode.toUpperCase();
    let item = this.items[itemCode];
    if (item === undefined || item === null) {
      message = "Invalid selection! : Money in vending machine = " + this.machineMoney.toFixed(2);
    } else if (item.quantity === 0) {
      message = item.name + ": Out of stock!";
    } else if (insertedMoney <= 0 || insertedMoney < item.price) {
      message = "Not enough money!";
    } else {
      item.quantity = this.updateQuantity(item.code);
      change = insertedMoney - item.price;
      changeLeft = change.toFixed(2);
      message = "Vending " + item.name;
      if (insertedMoney !== item.price) {
        message += " with " + changeLeft + " change.";
      }
      this.machineMoney = this.machineMoney + item.price;
    }
    return message;
  }
}