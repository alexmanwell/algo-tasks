function permutationsIterative(elements) {
  const stack = [[elements.slice(), 0]];
  const result = [];

  while (stack.length) {
    const [items, index] = stack.pop();

    if (index === items.length - 1) {
      result.push([...items]);
    } else {
      stack.push([items.slice(), index + 1]);
      for (let i = index + 1; i < items.length; i++) {
        [items[index], items[i]] = [items[i], items[index]];
        stack.push([items.slice(), index + 1]);
        [items[index], items[i]] = [items[i], items[index]];
      }
    }
  }

  return result;
}

// Test the algorithm
const inputElements = [1, 5, 9, 21];
const permutations = permutationsIterative(inputElements);
console.log(permutations);



