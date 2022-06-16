/*Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.*/

function find_average(array) {
    let newArray = 0
    if(array === [])
    return 0;
    for(let i = 0; i < array.length; i++){
      newArray += array[i] / array.length
   
    }
    return newArray // return average
  }

  console.log(find_average([3,4,5,6]))// => 4.5
  console.log(find_average([2,4,3,7]))// => 4