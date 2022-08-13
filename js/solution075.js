function findOdd(A) {
    let total = 0
    A = A.sort()
    for(let i=0; i < A.length; i++){
        if(A[i]=== A[i+1] ){
            total+= 1
        //if(total % 1===0){
            //return A[i]
        }else{
            total += 1
            if(total % 2 !== 0){
                return A[i]
            }
        }
        }
        
    }

    /*function findOdd(arr) {
        for(let i = 0; i < arr.length; i++){
          const count = arr.filter(value => value === arr[i]).length;
          if(count % 2 == 1){
            return arr[i];
          }
        }
        return -1;
      }
       
   */

   console.log(findOdd([1,2,2,4,4,4,4]))//1
   console.log(findOdd([3,7,8,5,6,9,9,5,8,7,3]))//6