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

/* #101 DONE /Take an array and remove every second element from the array.
//Always keep the first element and start removing with the next element.
//
//Example:
//["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//
//None of the arrays will be empty, so you don't have to worry about that!  */

//function removeEveryOther(array){
    //return array.filter((word,i) => i % 2 === 0)
//}
//console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])) //["Keep","Keep","Keep"]



/*#102  DONE  Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

However, the arrays can have varying lengths, not just limited to 4. */

//function binaryToNum(array){
    
    //return parseInt(array.join(''),2)
    
//}
//console.log(binaryToNum([0, 0, 0, 1]))//1

/*#103 Done The goal of this exercise is to convert a string to a new string where each character 
in the new string is "(" if that character appears only once in the original string, or ")"
 if that character appears more than once in the original string. Ignore capitalization when 
 determining if a character is a duplicate.*/

//function findDuplicateStr(string){
   //return string.split('').map(character => string.indexOf(character) === string.lastIndexOf(character) ? "(":")").join('')
    
    
     

//}

//console.log(findDuplicateStr('tiger'))// '((((('
//console.log(findDuplicateStr('moon'))// '())('

// take in a string, ignore capitalization, 
// we should return a new string consisting of either '(' or ')' 
//depending on if a specific character appears more than once inside that given string



/* #104 DONE Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)*/

//function stringToLineNum(str){
    //return str.map((num,i) => `${i + 1}: ${num}`)
//}
//console.log(stringToLineNum(['one', 'two', 'three']))// 1: one, 2: two, 3: three
//console.log(stringToLineNum(["a","b","c"]))// 1: a, 2: b, 3: c




/* #105 Done Write a function that takes an array of strings as an argument and returns a 
sorted array containing the same strings, ordered from shortest to longest.

All of the strings in the array passed to your function will be different lengths, 
so you will not have to decide how to order multiple strings of the same length.*/

//function arrayShortToLong(array){
    //return array.sort((a,b) => a.length - b.length)
//}
//console.log(arrayShortToLong(["Telescopes", "Glasses", "Eyes", "Monocles"])) //["Eyes", "Glasses", "Monocles", "Telescopes"]
//console.log(arrayShortToLong(["Beg", "Life", "I", "To"])) //['I', "To","Beg", "Life"]

/* #106 In this kata you get the start number and the end number of a region and should return the 
count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!*/

//function notFive(start, end){
   
    //let count = 0    
    //for(let i = start; i <= end; i++){
       //let num = i.toString().split('')
       //let checkForFive = num.filter(digit => digit === '5').length
    //if(checkForFive === 0){
        //count ++
    //}
//}
   // return count
//}
//console.log(notFive(3,9))////6
//console.log(notFive(10,20))////10
//console.log(notFive(4,17))// 12

/* Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

*/
function noOdds( values ){
    return values.filter(num => num %2 == 0)
  }
  console.log(noOdds([0,1])) //[0]
  console.log(noOdds( [0,1,2,3] ))//[0,2] 

  //take in an array of integers / no funny business
  // array with only even integers in same order as they are given 