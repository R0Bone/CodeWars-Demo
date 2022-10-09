function dontGiveMeFive(start, end){
  
    
    let total = 0
    
    for(let i=start;i <= end;i++){
        let num = i.toString().split('') 
        let checkIfFive = num.filter(number => number == '5').length
            if(checkIfFive==0){
                total += 1
            }
    
        }
        return total
        
    }
  

console.log(dontGiveMeFive(1,9))// 8
console.log(dontGiveMeFive(4,17))// 12


