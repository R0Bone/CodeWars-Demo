/*Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). Strings
 passed in will consist of only letters and spaces. Spaces will be included only when more than 
 one word is present. */

function reverseWord(wordss){
    return wordss.split('').reverse().join('')
}

function spinWords(string){
   return string.split(' ').map(word=> word.length >= 5 ? reverseWord(word): word).join(' ')
     
  }


  console.log(spinWords('hey there sunshine'))