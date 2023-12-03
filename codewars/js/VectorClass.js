// https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4

class Vector {
  #components;

  constructor(components) {
    this.#components = components;
  }

  getItem(i) {
    return this.#components[i];
  }

  size() {
    return this.#components.length;
  }

  add(v) {
    if (this.size() !== v.size()) {
      throw new Error(`Invalid lengths ${this.size()} vs ${v.size()}`);
    }

    let values = new Array(this.size());
    for (let i = 0; i < this.size(); i++) {
      values[i] = this.getItem(i) + v.getItem(i);
    }

    return new Vector(values);
  }

  subtract(v) {
    if (this.size() !== v.size()) {
      throw new Error(`Invalid lengths ${this.size()} vs ${v.size()}`);
    }

    let values = new Array(this.size());
    for (let i = 0; i < this.size(); i++) {
      values[i] = this.getItem(i) - v.getItem(i);
    }

    return new Vector(values);
  }

  dot(v) {
    if (this.size() !== v.size()) {
      throw new Error(`Invalid lengths ${this.size()} vs ${v.size()}`);
    }

    let result = 0;
    for (let i = 0; i < this.size(); i++) {
      result += this.getItem(i) * v.getItem(i);
    }

    return result;
  }

  norm() {
    let result = 0;
    for (let i = 0; i < this.size(); i++) {
      result += this.getItem(i) ** 2;
    }

    return Math.sqrt(result);
  }

  equals(v) {
    for (let i = 0; i < this.size(); i++) {
      if (this.getItem(i) !== v.getItem(i)) {
        return false;
      }
    }

    return true;
  }

  toString() {
    return `(${this.#components.join(",")})`;
  }
}