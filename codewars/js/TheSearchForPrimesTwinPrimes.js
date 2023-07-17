// https://www.codewars.com/kata/596549c7743cf369b900021b

const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
};

const primes = (n) => {
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
};

const count = (primes) => {
    return primes.reduce((acc, el, index, arr) => {
        return (arr[index + 1] - arr[index] === 2) ? acc + 1 : acc;
    }, 0);
};

function twinPrime(n) {
    return count(primes(n + 1));
}