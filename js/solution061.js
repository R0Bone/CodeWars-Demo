var number = function(busStops){ // input will be an array full of 2 digit arrays (getting on) & (gettin off)
    let totalPeople = 0
    
    for(let i= 0; i < busStops.length; i++){
        let currentStop = busStops[i]
        let getOn = currentStop[0]
        let getOff = currentStop[1]

        totalPeople += getOn
        totalPeople -= getOff
    }

  return totalPeople // return the total amount of people left after everyone got on and off
}

console.log(number([[2,0],[3,2],[3,3]]))// 3
console.log(number([[5,0],[3,2],[1,1]]))// 6
console.log(number([[1,0],[5,2],[6,3]]))//7 

/*There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number
 of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array).
 Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are 
 probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. 
So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.*/