

const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

const solution = (roman) => {
    const romanDigits = roman.split("");
    let arabicNumber = "0";
    for (let i = 0; i < romanDigits.length; i++) {
        const current = romanDigits[i];
        if (i === romanDigits.length - 1) {
            arabicNumber += numerals[current];
            break;
        }

        const next = (i + 1 < romanDigits.length) ? romanDigits[i + 1] : 0;
        arabicNumber += (numerals[current] < numerals[next]) ? numerals[next] - numerals[current] : numerals[current];
        if (numerals[current] < numerals[next]) {
            i++;
        }
    }

    return parseInt(arabicNumber);
};