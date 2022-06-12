//Given an array of integers.

/*Return an array, where the first element is the count of positives 
numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.*/

function countPositivesSumNegatives(input) {
    const counter = []
    let positives = 0
    let negatives = 0
    
    
    if(input && input.length){
        for(let i = 0; i < input.length; i++){
             if(input[i] > 0){
        positives += 1
      }else{
        negatives += input[i]
      }
    }
    counter.push(positives)
    counter.push(negatives)
  }

  return counter
}


  console.log(countPositivesSumNegatives([1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15]))//=>[10, -65]
  console.log(countPositivesSumNegatives([1,2,3,4,5,6,-2,-1,-3,-4]))//=>[6,-10]