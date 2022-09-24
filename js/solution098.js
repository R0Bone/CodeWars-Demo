

function removeSmallest(numbers) {
    return numbers.filter(it => it !== Math.min.apply(null,numbers))
  }
  console.log(removeSmallest([1,2,3,4,5]))  //[2,3,4,5]
  console.log(removeSmallest([5,3,2,1,4]))  // [5,3,2,4]