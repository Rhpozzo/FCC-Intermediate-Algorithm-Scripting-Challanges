function sumPrimes(num) {
    let ctr = []; //counter;
    let prime = [];//prime numbers array;
    let sum = 0// result;
    for (let i = 2; i <= num; i++) {
        if (!ctr[i]) {
            prime.push(i);
            prime
            for (let j = i < 1; j <= num; j += i) {
                ctr[j] = true;
            }
        }
    }
    prime
    for (let i = 0; i < prime.length; i++) {
        sum += prime[i]
    }
    return sum;
}

console.log(sumPrimes(10));

