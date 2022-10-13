/*  #97 DONE > It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
All the students come to you and entreat you to calculate their average for them. Easy ! You just need 
to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.*/

//function getAvg(array){
    //return Math.floor(array.reduce((a,b) => a + b, 0)/array.length)

//}



//console.log(getAvg([2,2,2,2]))//2
//console.log(getAvg([2,1,4,5,11]))//4.6

/* #98 Done > The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior 
 architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating,
  and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so
 she asks you to write a program that tells her the ratings of the items after one removed 
 the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
If there are multiple elements with the same value, remove the one with a lower index. 
If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left. */
//function removeSmallest(arrayOfNums){
    //let minNum = Math.min(...arrayOfNums)
    //let index = arrayOfNums.indexOf(minNum)
    //return arrayOfNums.filter((digit, i) => i !== index)
//}


//console.log(removeSmallest([5,3,1,1,4]))  // [5,3,1,4]
//console.log(removeSmallest([9,7,3,5]))  // [9,7,5]

/*  #99 Done

#100  DONE!  Create a function that returns the sum of the two lowest positive numbers
   given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.*/

//function sumUpTwoLowest(array){
    //return array.sort((a,b) => a - b).reduce((a,b) => array[0] + array[1])
   
//}

//console.log(sumUpTwoLowest([2,3,4,5]))// 5
//console.log(sumUpTwoLowest([19, 5, 42, 2, 77]))// 7

//take in an array of numbers, positive, whole, minimum of 4 
// the sum of the two lowest numbers 

//[2,3,4,5]//5
//[19, 5, 42, 2, 77]//7

/* #101 /Take an array and remove every second element from the array.
//Always keep the first element and start removing with the next element.
//
//Example:
//["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//
//None of the arrays will be empty, so you don't have to worry about that!  */

function removeEveryOther(array){
    return array.filter((word,i) => i % 2 === 0)
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])) //["Keep","Keep","Keep"]



/*#102   Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

However, the arrays can have varying lengths, not just limited to 4. */

function binaryToNum(array){
    
    return parseInt(array.join(''),2)
    
}
console.log(binaryToNum([0, 0, 0, 1]))//1