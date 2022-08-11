/*Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
 that receive a list of integers as input, and return the largest and lowest number in that list, respectively */

var min = function(list){
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
//return the min/max number in the array
