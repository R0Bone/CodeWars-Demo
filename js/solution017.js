//Write a function to convert a name into initials. This kata strictly takes
// two words with one space in between them.

//The output should be two capital letters with a dot separating them.

function abbrevName(name){
    return name.split(' ').map(element => element[0]).join('.').toUpperCase()
    //split the two strings at the space and grab the first letter of each string using
    //.map and then join them with a period in between.  
     }
 console.log(abbrevName('Adam Sandler'))//A.S
 console.log(abbrevName('adan montana'))//A.M
 console.log(abbrevName('patrick feeney'))//P.F
 //Sam Harris => S.H
 //patrick feeney => P.F