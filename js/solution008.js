//We need a function that can transform a string into a number.
// **all inputs will be strings, and every string is a perfectly
// valid representation of an integral number.**

const stringToNumber = function(str){
    return Number(str) //Convert a String to a Number using Number method
  }
console.log(stringToNumber("1234"))
console.log(stringToNumber("605"))
console.log(stringToNumber("-7"))
console.log(stringToNumber("-714"))
//"1234" --> 1234
//"605"  --> 605
//"1405" --> 1405
//"-7" --> -7