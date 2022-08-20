/*Usually when you buy something, you're asked whether your credit card number, phone number or
 answer to your most secret question is still correct. However, since someone could look over your 
 shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'. */


function maskify(cc) { // take in a string of numbers
    let result = ''
 
  for(let i=0;i<cc.length;i++){
    if( i < cc.length-4){
        result += '#'
       
    }else{
        result += cc[i]
    }
      
 }
  return result // return a string with all numbers replaced with a # except the last four
    }
      
    console.log(maskify("4556364607935616"))//5616
    console.log(maskify("64607935616"))//5616
    console.log(maskify("Nananananananananananananananana Batman!"))//man!
    console.log(maskify("1"))//1