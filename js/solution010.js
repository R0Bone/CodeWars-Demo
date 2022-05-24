//The first century spans from the year 1 up to and including the year 100, 
//the second century - from the year 101 up to and including the year 200, etc.

//Given a year, return the century it is in.

function century(year) {
    return Math.ceil(year / 100) // divide the year by 100 and round up to the nearest whole number 

  }
 console.log(century(1705))//18
 console.log(century(1900))//19 
 console.log(century(2000))//20 
 century(1601)//17 
//1705 --> 18
//1900 --> 19
//1601 --> 17
//2000 --> 20