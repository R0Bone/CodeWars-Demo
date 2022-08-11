function removeRotten(bagOfFruits) {
  return bagOfFruits ? bagOfFruits.map((fruit) => fruit.replace("rotten", "").toLowerCase())
    : [];
} // if bagOfFruits is an array then remove string "rotten" and replace it with an empty string ""
// if its an empty string then return []

console.log(removeRotten(["apple", "peach", "rottenBanana", "pear"])); // ['apple','peach',banana','pear']
console.log(removeRotten([])); //
console.log(removeRotten()); //

//takes in an array of strings (fruits)
//returns an array with the partial string "rotten", removed 
