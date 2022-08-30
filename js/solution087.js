function feast(beast, dish) {
    return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1)
    }

    
    //Parameters: take in two strings - each containing at least two letters and no numbers, lowercase;
//Return: boolean, true or false;

//Examples:
//Test.assertEquals(feast("great blue heron", "garlic naan"), true)
//Test.assertEquals(feast("chickadee", "chocolate cake"), true)
//Test.assertEquals(feast("brown bear", "bear claw"), false)

//Psuedocode: get start and end letters of animanl name and compare them in turn to start and end of dish they are bringing.
//return true of false based on reverse.