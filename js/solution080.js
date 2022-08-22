function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort((a,b)=>a-b).reduce((a,b)=>numbers[0]+numbers[1])
  }
  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))//7
  console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))//3453455

  /*Create a function that returns the sum of the two lowest positive numbers given an array 
  of minimum 4 positive integers. No floats or non-positive integers will be passed */
  //take in an array of minimum 4 positive integers
  //return the sum of the two lowest numbers

  
