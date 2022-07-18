/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a 
boolean and be case insensitive. The string can contain any char.*/

function XO(str) {

    let xmark = 0
    let omark = 0
    for(let i = 0; i < str.length; i++){
      
         if(str[i].toLowerCase() === 'x'){
            xmark += 1
        }else if(str[i].toLowerCase() === 'o'){
            omark += 1
        }
    }
    return xmark === omark ? true : false
}
    
      
  
  
  //return true if 'x's and 'o's are even amount
  //if x's and o's arent even then return false
  // if no 'x's or 'o's are present return true
  console.log(XO('xxoo'))// true
  console.log(XO('ab1de'))// true
  console.log(XO('xooO'))// false