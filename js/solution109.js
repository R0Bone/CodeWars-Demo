
function isValidWalk(walk) {
    let ns = 0, ew = 0; 
    if(walk.length === 10){
      for (let i=0; i < walk.length; i++) { 
        if (walk[i] == 'n') {
            ns += 1;} 
        if (walk[i] == 's') {ns -= 1; }
        if (walk[i] == 'e') {ew += 1; }
        if (walk[i] == 'w') {
            ew -= 1; }
        
      } 
    }
    else
      return false
      return ns === 0 && ew === 0; 
  }
  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // true
  console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) // false