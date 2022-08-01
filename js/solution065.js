function countBy(multiples,num) {
let arr = [];
for(let i = 1; i <= num; i++){
  arr.push(multiples * i)
}
return arr
}
  console.log(countBy(2,5))// [2,4,6,8,10]

 //input will be two integers > 0
 //return an array of numbers in multiples of parameter {multiples} up to the lenght of num 