//The code provided is supposed replace all the dots . in the specified String str with dashes -

//But it's not working properly. Fix the bug so we can all go home early.


var replaceDots = function(str) {
    return str.replace(/\./g, '-');
  }

  // return a string with all the dots '.' replaced with dashes '-'
  console.log(replaceDots('super.mario.bros'))//super-mario-bros