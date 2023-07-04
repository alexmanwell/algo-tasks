// https://www.codewars.com/kata/54d512e62a5e54c96200019e

const isPrime = (number, prime) => {
    return number % prime === 0;
};

const primeFactors = (n) => {
    let prime = 2;
    let primes = [];
    while (n !== 1) {
        if (isPrime(n, prime)) {
            primes.push(prime);
            n = n / prime;
        } else {
            prime++;
        }
    }

    let decomposition = "";
    let count = 1;
    next:
        for (let i = 0; i < primes.length; i++) {
            if ((i + 1 < primes.length) && primes[i] === primes[i + 1]) {
                count++;
                continue next;
            } else {
                if (count === 1) {
                    decomposition += "(" + primes[i] + ")";
                }
                if (count > 1) {
                    decomposition += "(" + primes[i] + "**" + count + ")";
                    count = 1;
                }
            }
            if (count === 1 && (i === primes.length - 1) && (i + 1 < primes.length)) {
                decomposition += "(" + primes.get[i + 1] + ")";
            }
        }

    return decomposition;
};