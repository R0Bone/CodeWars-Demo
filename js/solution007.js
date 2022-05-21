//Write a function called repeatStr 
//which repeats the given string 's' exactly n times

function repeatStr (n, s) {
  return s.repeat(n); // return "string" n times using .repeat method 
    
  }



  console.log(repeatStr(6, "I")) // "IIIIII"
console.log(repeatStr(5, "Hello")) // "HelloHelloHelloHelloHello"
console.log(repeatStr(3, "Winner "))// "Winner Winner Winner"