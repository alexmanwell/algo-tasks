// https://www.codewars.com/kata/556deca17c58da83c00002db

const tribonacci = (signature,n) => {
    let result = [];
    result.push.apply(result, signature);
    let diff = n - signature.length;

    while (diff > 0) {
        let sumNumber = 0;
        for (let i = result.length - 1; i >= result.length - 3; i--) {
            sumNumber += result[i];
        }
        result.push(sumNumber);
        diff -= 1;
    }

    return result.slice(0, n);
};