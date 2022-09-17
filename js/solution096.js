

function sumMix(x){

return x.reduce((a,b)=> Number(a) + Number(b) ,0)
}

console.log(sumMix([1,'2','3',6])) //12