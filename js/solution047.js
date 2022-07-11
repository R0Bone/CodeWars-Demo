/*Your task is to make a function that can take any non-negative integer as an argument and return it 
with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.*/

function descendingOrder(n){  //input any non-negative integer
    
   
    return Number(n.toString().split('').sort((a,b) => b-a).join(''))
  }
//return the integer given in descending order 
  console.log(descendingOrder(53142))// => 54321   