//Given a random non-negative number, you have to return the digits of this 
//number within an array in reverse order.

function digitize(n) {
    return String(n).split("").reverse().map(Number)
  }
  console.log(digitize([348597]))//// [7,9,5,8,4,3]
  console.log(digitize([11298]))//// [8,9,2,1,1]