/*Ben has a very simple idea to make some profit: he buys something and sells it again. 
Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. 
Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

All arrays or lists will always have at least one element, so you don't need to check the length.
 Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
*/
/* function minMax(arr){   #1 solution 
arr = arr.sort((a,b)=> a-b)
    let x = arr[arr.length-1]
    let y = arr[0]
    return [y,x]
  }

  console.log(minMax([1,2,3,4,5])) //[1,5]
  console.log(minMax([1]))         // [1,1]  */

  function minMax(arr){    //#2 solution 
    //arr = arr.sort((a,b)=> a-b)
        return [Math.min(...arr),Math.max(...arr)]
      }

      console.log(minMax([1,2,3,4,5])) //[1,5]
      console.log(minMax([1]))         // [1,1]
      console.log(minMax([6,5,2,77,23,24,9]))         // [2,77]