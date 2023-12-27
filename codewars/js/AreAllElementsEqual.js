// https://www.codewars.com/kata/5963caa2cb97be79630000c0

Object.defineProperty(String.prototype, "eqAll", {
  value: function eqAll() {
    let set = new Set();
    for (let i = 0; i < this.length; i++) {
      if (!set.has(this.charAt(i))) {
        set.add(this.charAt(i));
      }
    }
    return set.size <= 1;
  }
});

Object.defineProperty(Array.prototype, "eqAll", {
  value: function eqAll() {
    let set = new Set();
    for (let i = 0; i < this.length; i++) {
      if (!set.has(this[i])) {
        set.add(this[i]);
      }
    }
    return set.has(NaN) ? false : set.size <= 1;
  }
});