// https://www.codewars.com/kata/57ba58d68dcd97e98c00012b

const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if ( n % i === 0) {
            return false;
        }
    }

    return true;
};

const primeNumbersList = (n) => {
    let list = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            list.push(i);
        }
    }

    return list;
};

const fractionalNumbersList = (arr) => {
    let fractionals = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            fractionals.push(arr[i] / arr[j]);
        }
    }

    return fractionals;
};

const sum = (arr) => {
    return arr.reduce((total, el) => {
        return total + el
    }, 0);
};

const primePrimes = (n) => {
    let primes = primeNumbersList(n);
    let fractionals = fractionalNumbersList(primes);
    return [fractionals.length, parseInt(sum(fractionals))];
};