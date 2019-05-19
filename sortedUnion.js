function uniteUnique(arr){
    let a = [];// create an empty array variable to hold your arr arguments.
    let b = [];// creat an empty arrat variable to hold your answer.
    for(let i = 0; i < arguments.length; i++){//Loop thru the arguments, we don't know how many that's why we use arguments key word.
        a.push(arguments[i]);// push all the arguments found in arr to a variable to compare in the next loop.
    }
    a = a.flat();// to get all the numbers into one single array, use .flat() method.
    for(let i = 0; i < a.length; i++){ //in this loop you will compare with index of if i is repeated in a[i] if this is true push to var b if not leave out.
        if(a.indexOf(a[i]) == i){
            b.push(a[i]);
        }
    }
    return b // return the answer.
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))