/**Check of the predicate (second argument) is truthy on all elements of a collection (first argument).
 * In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return if its value
 * is Truthy. Otherwise, return false.
 *
 * In JavaScript, truthy values are values that translate to true when evealuated in a Boolean context.
 *
 * Remember, you can access object properties through either dot notation or [] notation.
 *
 */

function truthCheck(collection, pre){
    let result = []; //create a variable to push what ever is true from the for loop.
    for(let i = 0; i < collection.length; i++){// loop thru the object to find true and false values.
        let obj = collection[i];
        if(obj.hasOwnProperty(pre) && Boolean(obj[pre]) ){// checks if boolean is true;
                result.push(i); // true? pushed to results, false? leaves it out.
        }
    }
    if(result.length === collection.length){// if statement to compare the length, if all are true the lengths should be the same and evaluate to true; if not true it will return false.
        return true;
    }else{
        return false;
    }
}

console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"))