/*Sum up every positive element. If the given input is an array of numbers, return the sum of all the positives ones. 
If the array is empty or there aren't any positive numbers, return 0.*/

function sumUpPosNums(nums){
  return nums.filter(num => num > 0).reduce((acc, value) => acc + value)
}

console.log(sumUpPosNums([1,-4,12,0,-3,29,-150]))// 42
console.log(sumUpPosNums([-2, 3,5,-6,-99]))// 8