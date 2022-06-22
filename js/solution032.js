/*odd number from 1 - 100 */
function oddNum(){
    let arr = []// assign an empty array
    for(let i = 0; i < 100; i++){ // loop through 1-100
      if (i % 2 ===1){
           arr.push(i) // add each element to empty array
       }   
    }
   
 return arr  //return the array
}
console.log(oddNum()) // return an array with only odd integers from 1 - 100 



