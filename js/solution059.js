function createPhoneNumber(numbers){
    return '(' + numbers[0] + numbers[1]+ numbers[2] + ')' + ' ' + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9]
  }

  console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])) 
  console.log(createPhoneNumber([9,5,1,7,3,3,0,2,8,9])) 

  // take in an array of integers
  // return a string formatted as a 10 digit American phone number
  // write function that takes in array and concatanates and returns string 

 