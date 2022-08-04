

//1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz 
//divisible by 3 print fizz
//divisible by 5 print buzz
//divisible by both print fizzbuzz*/

function fizzBuzz(num){

    for(let i=1; i <= num; i++){
    
    i % 3===0 && i %5===0 ? console.log('fizzbuzz'):
    i % 5===0 ? console.log('buzz'):
    i % 3===0 ? console.log('fizz'): console.log(i)
    }

 
 }

fizzBuzz(15)//1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz 

//create loop to go from 1 to num
//create a conditionals
//