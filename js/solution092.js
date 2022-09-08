/*Your goal in this kata is to implement a difference function, which subtracts one list from
 another and returns the result.

It should remove all values from list a, which are present in list b keeping their order */


function arrayDiff(a, b) {
    let result = []
  for(let i=0; i < a.length;i++){
    for(let j=0; j < b.length; i++){
        if(a[i] !== b[i]){
            result.push(a[i])
    }
    
    }
  }
  return result
}

console.log(arrayDiff([1,2,2,2,3],[2])) // [1,3]