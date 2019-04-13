function diffArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  let nArr = newArr[Symbol.iterator]()
  let result = []
  for(let diff of nArr){
    if(arr1.indexOf(diff) == -1){
      result.push(diff);
    }else if(arr2.indexOf(diff) == -1){
      result.push(diff)
    }
  }
  return result;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));



// function diffArray(arr1, arr2) {
//   var newArr = [];
//   let pushed = arr1.concat(arr2)

//   for(let diff of pushed){
//     if(arr1.indexOf(diff) == -1){
//       newArr.push(diff)
//     }else if(arr2.indexOf(diff) == -1){
//       newArr.push(diff)
//     }
//   }
// return newArr;
// }
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
