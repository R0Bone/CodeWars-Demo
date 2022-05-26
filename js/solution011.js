//Simple, remove the spaces from the (parameter)string, then return the resultant string.

function noSpace(x){
   let newString = x.replaceAll(" ", "") //replace every space inside the string with no spaces
   console.log(newString)

}

//return a string with no spaces

noSpace(' bye bye ')// byebye
noSpace('better days')// betterdays
noSpace('water melon')//watermelon