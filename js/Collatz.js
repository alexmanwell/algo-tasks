// https://www.codewars.com/kata/5286b2e162056fd0cb000c20

// Print the collatz sequence starting with positive integer n.
// Ex: collatz(4) should return "4->2->1"

const collatz = (n) => {
    const sequence = [];
    sequence.push(n);
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        sequence.push(n);
    }

    return sequence.join("->");
}