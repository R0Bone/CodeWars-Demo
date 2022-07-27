function nextLightColor(color){
    let stopLightRules = {
        green: "yellow",
        yellow:"red",
        red:"green",
    }

return stopLightRules[color]
    
}

console.log(nextLightColor('green'))//yellow
console.log(nextLightColor('red'))//green
console.log(nextLightColor('yellow'))//red

//input will be a string 
//return a string 
//return the ligth color that follows the color that goes into the input 