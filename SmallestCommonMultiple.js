/**
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in
 * the range between  these parameters.
 *  The range will be an array of two numbers that will not necessarily be in numerical order.
 * For example, if 1 and 3, find de smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer would be 6.
 * (Least common multiple)
 */

function smallestCommons(arr) {
    let range = arr.sort();
    let array = []
    for(let i = arr[0]; i <= arr[arr.length-1]; i++){
        array.push(i);
    }
    let x = true;
    let lcm =0
    while(x){
        lcm++;
        for(let j = array[0]; j <= array[array.length-1]; j++){
            if(lcm % j !== 0){
                break;
            }else if(j==array[array.length-1]){
                x=false;
            }
        }
    }
    return lcm ;
}

console.log(smallestCommons([5, 1]));
    /**
        smallestCommons([1, 5]) should return 60.
        smallestCommons([5, 1]) should return 60.
        smallestCommons([2, 10]) should return 2520.
        smallestCommons([1, 13]) should return 360360.
        smallestCommons([23, 18]) should return 6056820.
     */