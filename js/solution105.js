/*Write a function that takes an array of strings as an argument and returns a 
sorted array containing the same strings, ordered from shortest to longest.

All of the strings in the array passed to your function will be different lengths, 
so you will not have to decide how to order multiple strings of the same length.*/


function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
 return array.sort((a,b)=> a.length - b.length)
  };





console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])) //["Eyes", "Glasses", "Monocles", "Telescopes"]
console.log(sortByLength(["Beg", "Life", "I", "To"])) //["I", "To", "Beg", "Life"])
//take in an array of strings
//return an array of strings; in order of shortest length to longest
