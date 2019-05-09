function binaryAgent(str) {
  let a = str.split(' ') //split the string so the loop can recognize each index as one element.
  let c = []; // variable to hold the incomming data.
  for (let i = 0; i < a.length; i++) { // loop that will iterate each index of a.
    c.push(String.fromCharCode(parseInt(a[i], 2))); //parseInt takes indexes of a and converts them into keycodes. String fromCharCode changes those keycodes into letters. and the sentence is formed.
  }
  return c.join('') // join will complete the sentence from array into an readable string.
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));