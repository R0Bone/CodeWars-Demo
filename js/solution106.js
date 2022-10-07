function dontGiveMeFive(start, end){
    let total = 0
    let result = 0
    for(let i=start;i <= end;i++){
        if(i % 5===0){
            result += i
        }else{
            total +=1
        }
    }
  return total
}
console.log(dontGiveMeFive(1,9))// 8
console.log(dontGiveMeFive(4,17))// 12