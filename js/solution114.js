function oddOrEven(array) {
    array = array.reduce((a,b) => a + b, 0)
   return array % 2 ==0 ? "even" : "odd"
 }

 console.log(oddOrEven([1,2,4,3]))
 console.log(oddOrEven([1,2,4,4]))