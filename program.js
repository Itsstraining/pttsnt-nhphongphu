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

  while(!findPrimeNumber(naturalNumber)){
    for(let i = 0; i < naturalNumber; i++){
      if(findPrimeNumber(i) && naturalNumber % i == 0){
        resultArray.push(i);
        naturalNumber = naturalNumber / i;
        break;
      }
    }
  }
  resultArray.push(naturalNumber);
  return resultArray;
}

function main(input) {
  let naturalNumber = parseInt(input.split(" "));
  result(naturalNumber);
  let resultOutput = result(naturalNumber);
  let space = " ";
  for(let i = 0; i < resultOutput.length; i++){
    space = space + " " + resultOutput[i]
  }
  console.log(space)
}



module.exports = main;
