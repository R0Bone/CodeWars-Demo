/*The two oldest ages function/method needs to be completed. It should take an array of numbers as
 its argument and return the two highest numbers within the array. The returned value should be an
  array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. 
If there are two or more oldest age, then return both of them in array format.
*/


function twoOldestAges(ages){
   ages=  ages.sort((a,v) => a - v, 0) 
   return [ages[ages.length - 2], ages[ages.length - 1]]
  }

  console.log(twoOldestAges([1, 3, 10, 0])) // --> [3, 10]
  console.log(twoOldestAges([1, 5, 87, 45, 8, 8])) // --> [45, 87]
  console.log(twoOldestAges([1, 2, 10, 8])) // --> [8, 10]

  //take in an array of numbers 
  //return an array with highest and second hightest number
