/*Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.*/


function past(h, m, s){
   
    const convertHours = h * 60 * 60 * 1000;
    const convertMinutes = m * 60 * 1000;
    const convertSeconds = s * 1000;
    return convertHours + convertMinutes + convertSeconds;}

console.log(past(0,1,1))//result = 61000

//return: a number which is the sum of hours, minutes, and seconds converted into milliseconds. 