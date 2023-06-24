// https://www.codewars.com/kata/5539fecef69c483c5a000015

function backwardsPrime(start, stop) {
    let primeCandidates = findPrimeNumbers(start, stop);
    return primeCandidates.filter( (candidate) => {
        const reverseCandidate = reverse(candidate);
        return reverseCandidate !== candidate && isPrime(reverseCandidate);
    });
}

function reverse(num) {
    return parseInt(String(num)
            .split("")
            .reverse()
            .join(""),
        10
    );
}

function findPrimeNumbers(start, stop) {
    let primes = [];
    for (let candidate = start; candidate <= stop; candidate++) {
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }

    return primes;
}

function isPrime(candidate) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(candidate); i++) {
        if ( candidate % i === 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}