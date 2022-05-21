//Given an array of integers your solution should find the smallest integer.
function findSmallestInt(array){
    let smallest = Math.min(... array);
    return  smallest;
}
console.log(findSmallestInt([23,30,35,24]))//23
console.log(findSmallestInt([34,15,88,2]))//2
console.log(findSmallestInt([34,-345,-1,100]))//-345
    

  



/*Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345*/