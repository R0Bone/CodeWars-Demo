//Square the value of every element in the array. Presume that you will only get numbers in the input array.

function squareErrNum(num){
  
  return num.map(number => Math.pow(number,2))
  
  
    //loop through the array 
    //square each element inside the array 
    //return the array 
}

console.log(squareErrNum([2,3,4]))// ([4,9,16])