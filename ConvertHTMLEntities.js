//Convert the characters &, <,>,"" (double quote), and ' (apostrophe), in a string to their corresponding
//HTML entities.
function convertHTML(str){

    let a = str.split(""); //convert str into an array with .split("")
for(let i = 0; i < a.length; i++){ //loop thru you array to see which case applies using switch statement;
    switch(a[i]){
        case "&":
        a[i] = "&amp;"
        break;
        case '<':
        a[i] = '&lt;'
        break;
        case '>':
        a[i] = '&gt;'
        break;
        case "\"":
        a[i] = '&qout;'
        break;
        case "\'":
        a[i] = '&apos;'
    }
}
     return a.join('');// return variable with join() to convert it back to a string.
}

console.log(convertHTML("Hamburger < Tacos < Pizza < Hotdog"));

