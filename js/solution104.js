/*Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)*/

//take in an array of strings
//return those strings in an array pre numbered beginning from 1
// in this specific format, n: string 


var number=function(array){
    let newarr = []
    let count = 0
    for(let i=0; i < array.length;i++){
        count += 1
       newarr.push( `${count}: ${array[i]}`)
        
    }
    return newarr
  }

  console.log(number(["a","b","c"])) // --> ["1: a", "2: b", "3: c"]