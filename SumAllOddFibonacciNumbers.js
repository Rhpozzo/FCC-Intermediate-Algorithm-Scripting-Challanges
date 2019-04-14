function sumFibs(num) {
    let a = 0;
    let b = 1
    let c;
    let sumOdds = 0;
    for(let i = 0; i <= num; i++){
      c = a + b;
      a = b;
      b = c;
      if(c % 2 !== 0 && c <= num){
        sumOdds = c + sumOdds;
        console.log(sumOdds)
      }
    }
    return sumOdds + 1
  }

  console.log(sumFibs(3));