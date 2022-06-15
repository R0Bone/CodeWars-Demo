/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5
 and above with '1'. Return the resulting string.

Note: input will never be an empty string*/
function fakeBin(x){
    let string = ''
   for(let i = 0; i < x.length; i++){
     
      if (Number(x[i]) < 5) {
       string += '0'
       
      }else{
         string += '1'
      }
    }
    return string  // return a string with "0"'s, "1"'s
  }

  console.log(fakeBin('3772')) // '0110'
  console.log(fakeBin('9115')) // '1001'
  console.log(fakeBin('5001')) // '1000'
  