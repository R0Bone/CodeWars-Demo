//Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives

//You can assume that all values are integers. Do not mutate the input array/list.

function oppositeArray(array) {
   return array.map(num => num * -1)
    }//create a loop to go through the array
    //multiply all the integers by -1 to convert 
    //return the new array 
    


 //return the inverse of each integer given 

console.log(oppositeArray([1,2,3,4,5]))// == [-1,-2,-3,-4,-5]
console.log(oppositeArray([1,-2,3,4,-5]))// == [-1,2,-3,-4,5]
console.log(oppositeArray([-1,-2,-3,-4,-5]))// == [1,2,3,4,5]

