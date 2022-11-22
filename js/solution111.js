/*Complete the function/method so that it returns the url with anything after the anchor (#) removed.*/

function removeUrlAnchor(url){
    let remove = url.indexOf('#')
    

return remove === -1 ? url : url.split('').slice(0, remove).join('')
  
  }


  console.log(removeUrlAnchor("www.codewars.com#about"))  // --> "www.codewars.com"
  console.log(removeUrlAnchor('www.codewars.com/katas/'))  // www.codewars.com/katas/--> 
  console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))  // 'www.codewars.com/katas/?page=1' --> 

  // take in a string ( numbers, letters, symbols)
  // return a string ( if string contains '#" remove everything after symbol)
  