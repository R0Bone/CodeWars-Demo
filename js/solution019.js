/*Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

Return: "found the needle at position " plus the index it found the needle, so:*/

function findNeedle(haystack) {
    let index = haystack.indexOf('needle', 0);// indexOf() returns the location of the string starting from , 0
    return `found the needle at position ${index}`
  }

  console.log(findNeedle(['weeds', 'thrash', 'needle', 'grass', 'table']))
  //"found the needle at position 2"