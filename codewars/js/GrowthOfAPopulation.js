// https://www.codewars.com/kata/563b662a59afc2b5120000c6

const nbYear = (p0, percent, aug, p) => {
    let amountYears = 0;
    let increasePopulation = p0;
    while (increasePopulation < p) {
        increasePopulation += increasePopulation * percent / 100 + aug;
        amountYears++;
    }

    return amountYears;
};