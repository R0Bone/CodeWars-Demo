/*In this kata you will create a function that takes a list of non-negative
 integers and strings and returns a new list with the strings filtered out.*/


// Using filter method instead of a loop  
//function filter_list(l) {
  // return l.filter(element => typeof element === 'number')

  
 // }
 
function filter_list(l) {
  let noStringsOnlyNums = []
    for(let i = 0; i < l.length; i++){
        if(typeof l[i] === 'number'){
            noStringsOnlyNums.push(l[i])
        }
    }
  return noStringsOnlyNums //returns a new list with the strings filtered out
 }
 

  

  console.log(filter_list([1,2,'a','b']))// [1,2]
  console.log(filter_list([345,7,'look',0]))// [345,7,0]
  console.log(filter_list([1,2,"aasf","1","123",123]))//  [1,2,123]

 