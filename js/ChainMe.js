// https://www.codewars.com/kata/54fb853b2c8785dd5e000957

const chain = (input, fs) => {
    return fs.reduce((input, fs) => {
        return fs(input);
    }, input);
}