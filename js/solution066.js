function removeRotten(bagOfFruits){
    
    return bagOfFruits ? bagOfFruits.map(fruit =>fruit.replace('rotten','').toLowerCase()) : []

    
  }

  console.log(removeRotten(['apple','peach','rottenBanana','pear']))// ['apple','peach',banana','pear']
  console.log(removeRotten([]))// 
  console.log(removeRotten())// 