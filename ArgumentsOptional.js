/*
Create a function that sums two arguments together. If only one argument is provided,
then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a sinlge argument will then return sum:
var sumTwoAnd = addTogether(2);
sumTwo(3) returns 5.
if either argument isn't a valid number, return undefined.
*/
function addTogether() {
    let arg = [...arguments]; // copy of arguments, not modifing the original.

    if (typeof arg[0] === 'number' && typeof arg[1] === 'number') { //if both arguments are numbers add them and return result.
        return arg[0] += arg[1];
    }

    if(arg.length == 1){ //if argument is only 1
        if( typeof arg[0] !== 'number'){//confirm arg is a num, if not a num return undefined and stop!
            return undefined; // <-- Return Undefined if statement true;
        }else return function(x){// else return a function taking 1 argument,
            if(typeof x !== 'number'){// arg must be num, if not.
                return undefined// return undefined.
            }else{// else return sum;
                return arg[0] + x;// sum;
            }
        }
    }
}




console.log(addTogether(2)(3));

