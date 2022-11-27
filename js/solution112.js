function maskify(cc) {
    //let result = cc.slice(-4)
    //let x = cc.slice(0,-4)
    let result = ""
    let final = cc.slice(-4)
    for (let i = 0; i < cc.length-4; i++){
        result += "#"
    }
  return result + final
}



console.log(maskify("Skippy")) //--> "##ippy"

//take in a string (letters, numbers, symbols)
//return string ( last 4 digits/letters and replace the beginning of string with '#' for every digit included)
