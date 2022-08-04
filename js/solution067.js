/*function firstNonConsecutive (arr) {
  let num = ''
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < i + 1 ){
            num += arr[i]
        }
    }
}
*/
/*function firstNonConsecutive (arr) {
    for (let i = 0; i<arr.length - 1; i++) {
      if(arr[i]+1 !== arr[i+1]) {
       return arr[i+1]
     } 
       
     }
      return null
    }

console.log(firstNonConsecutive([1,2,3,4,6,7,8,9]))*/

function firstNonConsecutive (arr) {
    let num = []
    for (let i = 0; i<arr.length ; i++) {
     num.push(arr[i+1])
     } 
       return num
     }
      
    
    console.log(firstNonConsecutive([3,4,6,7,8,9]))