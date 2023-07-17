// https://www.codewars.com/kata/build-a-pile-of-cubes/

function findNb(m) {

    let number = 0;
    let sum = 0;
    while (sum < m) {
        sum += (number + 1) ** 3;
        number++;
    }

    return sum === m ? number : -1;
}