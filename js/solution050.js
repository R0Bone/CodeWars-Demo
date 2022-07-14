/*You will be given an **array a and a **value x. All you need to do is check whether 
the provided array contains the value.

Array can contain numbers or strings. X can be either.

****Return true if the array contains the value, false if not.*/

function check(array, xValue) {
    return array.includes(xValue) //.includes goes through the array and returns true if it contains xValue,
    // false otherwise 
      
    }

    console.log(check([1,2,3],3))// true
    console.log(check(['a','b','c'],'aa'))// false
    console.log(check([23,'24',30], '24'))// true