/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a 
function that determines whether a string that contains only letters is an isogram. Assume the empty
 string is an isogram. Ignore letter case.*/

function isIsogram(str){ // takes in a string of letters only 
     str = str.toLowerCase()
for(let i=0; i< str.length;i++){  // create a loop that goes through the string str
    for(let j= i + 1; j< str.length;j++){ // create 2nd loop to go through the string str but starts i + 1 =>
        if (str[i]=== str[j]){ // compare [i]'s
            return false
       }
}
 
}
return true // it will return a boolean 
}
console.log(isIsogram("Dermatoglyphics"))//true
console.log(isIsogram("aba"))//false
console.log(isIsogram("moOse"))//false
console.log(isIsogram("morhous"))//false 
