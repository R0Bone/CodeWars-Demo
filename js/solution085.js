function isAnagram (test, original) {
    return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
  }
  // take in two strings
  // return true or false pending the words/letters equal the same 

  console.log(isAnagram('angel','angle'))// true    
  console.log(isAnagram('Buckethead','DeathCubeK'))//true
  console.log(isAnagram('ruukus','killaBee'))// false
  
  
  /*An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
  
  Note: anagrams are case insensitive
  
  Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
  
  Examples
  "foefet" is an anagram of "toffee"
  
  "Buckethead" is an anagram of "DeathCubeK"*/