/*Write a function that takes a single string (word) as argument. The function must return an ordered list 
containing the indexes of all capital letters in the string.*/

//const upper = str => str == str.toUpperCase()

var capitals = function (word) {

let indexxx = []
for(let i = 0; i < word.length;i++){
    if(word[i]== word[i].toUpperCase()){
        indexxx.push(i)
    }
}
	  return indexxx
        
    
    }


console.log(capitals('CodEWaRs')) //[0,3,4,6]

