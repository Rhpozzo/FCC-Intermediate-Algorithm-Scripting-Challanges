function sumPrimes(num) {
    let ctr = [];
    let prime = [];
    let sum = 0
    for (let i = 2; i <= num; i++) {
        if (!ctr[i]) {
            prime.push(i);
            for (let j = i < 1; j <= num; j += i) {
                ctr[j] = true;
            }
        }
    }
    for (let i = 0; i < prime.length; i++) {
        sum += prime[i]
    }
    return sum;
}

console.log(sumPrimes(977));