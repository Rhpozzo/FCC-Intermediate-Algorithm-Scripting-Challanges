/**INTERMEDIATE ALGORITHM SCRIPTING: WHEREFORE ART THOU
 * Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and
 * value pairs(second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be
 * included  in the returned array.
 * For example, if the first arguments if  [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]
 * and the second argument is {last: "Capulet"}, then you must return the third object from the array (the first argument), because it
 * contains the name and its value, that was passed on as a second argument.
 */
function whatIsInAName(collection, source) {

let arr = collection.filter(function(x){
    for(let p in source){
        console.log(x[p] == source[p])
        if( x[p] !== source[p] ){
            return false;
        }
    }
    return true;
});
console.log(arr)
return arr
}

whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
         { first: "Mercutio", last: null },
          { first: "Tybalt", last: "Capulet" }
    ],
     { last: "Capulet" }
     );