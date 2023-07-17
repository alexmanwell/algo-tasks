// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058

function solve(s){
    let characters = [0, 0, 0, 0];
    for (let i = 0; i < s.length; i++) {
        const c = s.substring(i, i + 1);
        if ((/[A-Z]/).test(c)) {
            characters[0] += 1;
        } else if ((/[a-z]/).test(c)) {
            characters[1] += 1;
        } else if ((/^\d$/).test(c)) {
            characters[2] += 1;
        } else {
            characters[3] += 1;
        }
    }

    return characters;
}