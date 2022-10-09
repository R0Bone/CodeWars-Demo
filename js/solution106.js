/*In this kata you get the start number and the end number of a region and should return the 
count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!*/

function dontGiveMeFive(start, end){
  
    
    let total = 0
    
    for(let i = start; i <= end; i++){
        let num = i.toString().split('') // break index number into an array of strings
        let checkIfFive = num.filter(number => number == '5').length // filter through array to check for number strings with a '5' and grab the length
            if(checkIfFive==0){// if number string has no '5's add 1 to total 
                total += 1
            }
    
        }
        return total
        
    }
  

console.log(dontGiveMeFive(1,9))// 8
console.log(dontGiveMeFive(4,17))// 12

//take in two number parameters (start,end) *can be negative
//return the lenght/amount of index count from start parameter to end parameter including both parameters
// exclude any number that has a 5 in the count 



