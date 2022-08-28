//Complete the function that accepts a string parameter, and reverses each word in the string. 
//All spaces in the string should be retained

const reverse = s => s.split('').reverse().join('') // set up a function that reverses a word/string 

const reverseWords = str => str.split(' ').map(word=> reverse(word)).join(' ')
//set up a function that takes a string, splits it into an array of words using a space, and maps through
//each word(plug in reverse function above to reverse each word) and then join it w/ a space 

console.log(reverseWords('im the killabee son'))//mi eht eeballik nos

//take in a string
//return a string 