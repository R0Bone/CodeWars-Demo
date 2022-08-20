function sumArray(array) {
    let total = 0
   array = array.sort((a,b)=> a - b)
   for(let i=1; i < array.length-1; i++){
    total += array[i]
   }
  return total
  }
  console.log(sumArray([4,3,22,5,23]))//31
  console.log(sumArray([9,11,23,6,8]))//28

  