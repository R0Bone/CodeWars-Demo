/*Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
 that receive a list of integers as input, and return the largest and lowest number in that list, respectively */

/*var min = function(list){
    list = list.sort((a,b)=> a-b)
    return list[0];
}

var max = function(list){
   list = list.sort((a,b)=> a-b)
    return list[list.length - 1]
}

console.log(min([2,1,3,66,9,24]))//1
console.log(max([2,1,3,66,9,24]))//66
//take in an array of numbers
//return the min/max number in the array */

function getSum( a,b )
{    const min = a < b ? a : b;
    const max = a < b ? b : a;

  let sum= 0
   if(a ===b){
     return a
   }else{
     for(let i= min; i <= max; i++){
      sum = sum + i 
     }
   }
  return sum
}

console.log(getSum(1,0))// 1+0 =1
console.log(getSum(1,1))// 1 and 1 = 1 same number
console.log(getSum(0,-1))// -1 + 0 = -1
console.log(getSum(2,1))// 1 + 2 = 3
//Beginner Series #3 Sum of Numbers