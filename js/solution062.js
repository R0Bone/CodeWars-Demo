/*I'm new to coding and now I want to get the sum of two arrays...actually the sum of
 all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.*/

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }

  console.log(arrayPlusArray([2,3,4],[1,2,9]))//21

  //write function that takes in two arrays 
  //concatanate two arrays and sum up the integers 
  //return the sum 


  