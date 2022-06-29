/*In this little assignment you are given a string of space separated numbers,
 and have to return the highest and lowest number.*/

function highAndLow(numbers){
  
    let arr = numbers.split(" ").sort((a,b)=> a-b)
    let first = arr[0]
    let second = arr[arr.length-1]
    return String(second + " " + first)
  
    }

    console.log(highAndLow('5 4 1 2 3'))// "5 1"
    console.log(highAndLow("1 2 -3 4 5")) // return "5 -3"

/*Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.*/