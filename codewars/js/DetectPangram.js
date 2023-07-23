// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

const AMOUNT_LATIN_LETTERS = 26;

const isPangram = (string) => {
    let characters = new Set();
    string.toLowerCase().split("").forEach((c) => {
        if ((/[a-z]/).test(c)) {
            characters.add(c);
        }
    });

    return characters.size === AMOUNT_LATIN_LETTERS;
};