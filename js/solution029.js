/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer*/

function squareDigits(num){
    let array = num.toString().split("").map(item => Math.pow(item, 2)).join('');
    let newArray = array * 1
    
    return newArray; // take in a number, convert into a string, split the string, multiply to the second power,
    //join the string but dont forget to return a Number. 
  }

  console.log(squareDigits(9119))// => 811181
  console.log(squareDigits(9123))// => 81149
  console.log(squareDigits(3212))// => 9414