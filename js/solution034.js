/*Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.*/

      // create an empty array
function fizzbuzz(n)
{   
    const arr= []
    
    for (let i = 1; i <= n; i++){
    if (i % 15 === 0){
        arr.push('fizzbuzz')
    }else if( i % 5 === 0){
        arr.push('Buzz')

    }else if( i % 3 ===0){
        arr.push('Fizz')
    }else{
        arr.push(i)
    }
    
}
return arr
  //loop that goes from 1 to N + condition 
  //push each [i] to an array
  //return the array
}

console.log(fizzbuzz(3)) //-->  [1, 2, "Fizz"]
console.log(fizzbuzz(30)) 