/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!*/

function areYouPlayingBanjo(name) {
    let nameArray = name.split('')
   if(nameArray[0] === "R" || nameArray[0]=== 'r'){
      return nameArray.join('') + ' plays banjo'
    }else{
       return nameArray.join('') + " does not play banjo"}
    } 
  


  console.log(areYouPlayingBanjo('Roger'))//'Roger plays banjo'
  console.log(areYouPlayingBanjo('ruth'))//'ruth plays banjo'
  console.log(areYouPlayingBanjo('sam'))//'sam does not play banjo'