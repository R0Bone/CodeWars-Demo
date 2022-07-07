//For simplicity, 
//you'll have to capitalize each word, check out how contractions are expected to be in the example below.

function toJadenCase(string) {
    let capitalized = string.split(' ')
    let result = capitalized.map(capitalized => capitalized.charAt(0).toUpperCase() + capitalized.slice(1)).join(' ')
    return result
   }

   console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))
   //"How Can Mirrors Be Real If Our Eyes Aren't Real"
   console.log(toJadenCase("from lambs to lions"))
   //"From Lambs To Lions"