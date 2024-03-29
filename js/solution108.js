/*Just a simple sorting usage. Create a function that returns the elements of 
the input-array / list sorted in lexicographical order.*/

//sortme = function( names ){
    //return names.sort()
   //}
   //console.log(sortme(['one', 'two', 'three' ]))// ["one", "three", "two"])
   //take in an array of strings, no integers, no funny business
   //return an array in lexicographical order 

   
   
/*You are given a dictionary/hash/object containing some languages and your test results in the 
given languages. Return the list of languages where your test score is at least 60, in descending 
order of the results.

Note: the scores will always be unique (so no duplicate values)   */
 //function myLanguages(results) {
   
     
     
         //return Object.keys(results).filter(index => results[index] >= 60).sort((a,b) => results[b]-results[a])
     
    

//}

//take in some objects with keys and values, all unique, and different languages
// return an array with the objects/keys which language result or value is 60 + 
// return it in descending order 

//console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65})) //["Ruby", "Python"]
//console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71}))  //-->  ["Dutch", "Greek", "Hindi"]


function adjacentElementsProduct(array) {
    let maxProduct = array[0] * array[1];
    for (let i = 1; i < array.length; i++) {
       product = array[i] * array[i + 1];
       if (product > maxProduct)
          maxProduct = product;
    }
    return maxProduct;
 };

  console.log(adjacentElementsProduct([5, 8])) // 40
  console.log(adjacentElementsProduct([1, 2, 3])) // 6
  console.log(adjacentElementsProduct([1, 5, 10, 9])) // 90
  console.log(adjacentElementsProduct([4, 12, 3, 1, 5])) // 48 