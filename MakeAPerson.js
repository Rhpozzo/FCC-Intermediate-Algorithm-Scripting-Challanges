/**
 * Fill in the object constructor with the following methods below:
 * getFirstName() getLastName() getFullName()
 * setFirstName(first) setLastName(last) setFullName(fisrtAndLast);
 *
 * Run the tests to see the expected output for each method.
 * The methods that take an argument must accept only one argument and it has to be a stirng.
 * These methods must be the only available means of interacting with the object
 * */

var Person = function(firstAndLast) {
    let fullName = arguments[0].split(' ');//split the argument to have two elements in an array. First Name and Last Name;
     this.getFullName = function() {//return the first function of fullName;
         firstAndLast = fullName;
         return firstAndLast.join(' ');// return with .join(' ') so it will be first and last name;
     },
     this.getFirstName = function(){ // getFirstName function to get only the first name in the array that we split.
         return fullName[0]; // return the first name;
     },
     this.getLastName = function(){// getLastName function to get only the Last name in the array that we split.
         return fullName[1];// return the last name;
     },
     this.setFirstName = function(x){//set first name function to change the first name;
         return fullName[0] = x;//return the new name;
     },
     this.setLastName = function(y){// set last name function to change the last name;
         return fullName[1] = y; // return the new last name;
     },
     this.setFullName = function(z){//repeat the above steps but for Full Name change.
         let setFN = z.split(" ")// will take in str and split it into two elements in an array.
         fullName[0] = setFN[0]//  index 0 corresponds to first name change the old one and set the new.
         fullName[1] = setFN[1]//index 1 corresponds t0 the last name, change the old one and set the new.
         return fullName.join(' ')// join the array soy it is one element.
     }
   };

   var bob = new Person('Bob Ross');
  console.log(bob.getFullName());
  console.log(bob.getFirstName());
  console.log(bob.getLastName());
  console.log(bob.setFirstName('Roman'));
  console.log(bob.setLastName('Pozzo'));
  console.log(bob.getFirstName());
  console.log(bob.getLastName())
   console.log(bob.setFullName('Haskell Curry'))
   console.log(bob.getFullName())
   console.log(bob.getFullName());
   console.log(bob.getFirstName());
   console.log(bob.getLastName());
  console.log(Object.keys(bob).length)