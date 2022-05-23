//Write a program that finds the summation of every number from 1 to num. 
//The number will always be a positive integer greater than 0.
var summation = function (num) {
    let sum = 0 // assign a variable where the sum of all numbers will go into 
   
    for(let i = 1; i <= num; i++){//build a loop that goes from 1 to num
        sum += i  //add up all the numbers and place them in varible sum
    }
        return sum   //return the sum of all numbers
    
    }

    console.log(summation(2))//3
    console.log(summation(8))//36
    console.log(summation(12))//78
//return: sum of all numbers from 1 to num.
//summation(2) -> 3
//1 + 2
//summation(8) -> 36
//1 + 2 + 3 + 4 + 5 + 6 + 7 + 8