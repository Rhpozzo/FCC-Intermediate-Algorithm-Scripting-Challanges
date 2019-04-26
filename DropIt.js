/**
 * Given the array "arr", iterate through and remove each element starting from the first element (the 0 index) until the function func returns
 * true when iterated element is passed through it.
 *
 * Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/
function dropElements(arr, func){
    let a = []; //array to compare and have result.
    for(let i = 0; i < arr.length; i++){ //loop will go over each element and push it to a.
        a.push(arr[i]);
         if(func(a[0]) == false){ //if statement will use the loop to compare if the func argument passes the return statement .
                a.pop();//it will check 0 index for true, if it is false it will remove it until condition is true. Once true iteration will stop.
            }
        }
    return a; //return answer.
}

console.log(  dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})    )

/**
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
Passed
dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
 */