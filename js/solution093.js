/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive 
integers. 
No floats or non-positive integers will be passed. */

/*function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort((a,b)=> a-b).reduce((a,b) => numbers[0]+numbers[1])
  }


console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])) // 7 */




/*Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero). */

function oddOrEven(array) {

    return array.reduce((currentTotal,item) => currentTotal + item, 0) % 2 == 0 ? "even" : "odd"
  
 }

 console.log(oddOrEven([0, 1, 4]))// odd
 console.log(oddOrEven([0, 1, -1]))// even
 console.log(oddOrEven([0]))// even
 console.log(oddOrEven([0,-3,-3]))// even