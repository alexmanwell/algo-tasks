// https://www.codewars.com/kata/550f22f4d758534c1100025a

const isOpposite = (dir1, dir2) => {
    if ((dir1 === "NORTH" && dir2 === "SOUTH") ||
        (dir1 === "SOUTH" && dir2 === "NORTH")) {
        return true;
    }
    return (dir1 === "EAST" && dir2 === "WEST") ||
      (dir1 === "WEST" && dir2 === "EAST");


};

const dirReduc = (arr) => {
    let stack = new Stack();

    stack.push(arr[0]);
    let index = 1;
    while (index < arr.length) {
        if (!isOpposite(stack.peek(), arr[index])) {
            stack.push(arr[index]);
        } else {
            stack.pop();
        }
        index++;
    }

    return stack.getStorage();
};

class Stack{
    #storage;

    constructor(... args){
        this.#storage = [... args];
    }

    peek(){
        return this.#storage[this.#storage.length - 1];
    }

    push(value){
        return this.#storage.push(value);
    }

    pop(){
        return this.#storage.pop();
    }

    isEmpty() {
        return this.#storage.length === 0;
    }

    getStorage() {
        return this.#storage;
    }
}