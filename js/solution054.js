function sentenceSmash(str){
    return str.join(' ')
}

// input will take in an array of string's
// return a single string 
console.log(sentenceSmash(['hello','world','this','is','great']))//'hello world this is great'

/*Write a function that takes an array of words and smashes them together into a sentence and
 returns the sentence. You can ignore any need to sanitize words or add punctuation, 
but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!*/