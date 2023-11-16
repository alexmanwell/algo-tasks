// https://www.codewars.com/kata/540afbe2dc9f615d5e000425

class Sudoku {
  #data;
  #size;

  constructor(data) {
    this.#data = data;
    this.#size = data.length;
  }

  #validRow() {
    let isValid = true;
    for (let row = 0; row < this.#size - 1; row++) {
      for (let col = 0; col < this.#size; col++) {
        const value = this.#data[row][col];
        const index = this.#data[row].indexOf(value);
        const lastIndex = this.#data[row].lastIndexOf(value);
        if (index !== lastIndex) {
          isValid = false;
          break;
        }
      }
    }

    return isValid;
  }

  #validCol() {
    let isValid = true;
    for (let col = 0; col < this.#size; col++) {
      for (let row = 0; row < this.#size - 1; row++) {
        const value = this.#data[row][col];
        const index = this.#data[col].indexOf(value);
        const lastIndex = this.#data[col].lastIndexOf(value);
        if (index !== lastIndex) {
          isValid = false;
          break;
        }
      }
    }

    return isValid;
  }

  #getMultipliers = (size) => {
    let multipliers = new Array(size * size);
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        multipliers[i * size + j] = [i, j];
      }
    }

    return multipliers;
  };

  #validSquare() {
    const size = Math.sqrt(this.#size);
    const multipliers = this.#getMultipliers(size);
    let isValid = true;
    for (let multiplier of multipliers) {
      const rowStart = multiplier[0] * size;
      const colStart = multiplier[1] * size;
      const set = new Set();
      for (let row = rowStart; row < rowStart + size; row++) {
        for (let col = colStart; col < colStart + size; col++) {
          const value = this.#data[row][col];
          if (set.has(value)) {
            isValid = false;
            break;
          }
          set.add(value);
        }
      }
    }

    return isValid;
  }

  #validSizeOfBoard() {
    const size = this.#size;
    return !this.#data.map((list) => list.length === size).some(item => item === false);
  }

  #validValues() {
    let isValid = true;
    for (let row = 0; row < this.#size; row++) {
      for (let col = 0; col < this.#size; col++) {
        const value = this.#data[row][col];
        if (!(value > 0 && value <= this.#size)) {
          isValid = false;
          break;
        }
      }
    }

    return isValid;
  }

  isValid() {
    if (this.#data[0][0].length === 0) {
      return false;
    }
    if (typeof this.#data[0][0] !== "number") {
      return false;
    }

    return this.#validSizeOfBoard()
      && this.#validValues()
      && this.#validRow()
      && this.#validCol()
      && this.#validSquare();
  }
}