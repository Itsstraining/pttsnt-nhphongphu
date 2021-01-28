function findPrimeNumber(naturalNumber) {
  let isPrime = true;
  if (naturalNumber === 1) {
  }
  else if (naturalNumber > 1) {
    for (let i = 2; i < naturalNumber; i++) {
      if (naturalNumber % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return naturalNumber;
    }
  }
  else {
    return;
  }
}

function result(naturalNumber) {
  let resultArray = [];
  let tempNaturalNumber = naturalNumber;

  for (let i = 0; i <tempNaturalNumber; i++ ){
    if(naturalNumber % findPrimeNumber(i) == 0){
      resultArray.push(i);
      naturalNumber = naturalNumber / i;
      resultArray.push(naturalNumber);
      console.log(resultArray);
    }
  }


  // for (let i = naturalNumber; i == 2; i--) {
  //   if (findPrimeNumber(i) % naturalNumber == 0) {
  //     resultArray.push(i);
  //     naturalNumber = naturalNumber / i;
  //     resultArray.push(naturalNumber);
  //     console.log(resultArray);

  //   }
  // }
}

function main(input) {
  let naturalNumber = parseInt(input.split(" "));
  findPrimeNumber(naturalNumber);
  result(naturalNumber);
  

}



module.exports = main;
