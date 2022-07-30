function likes(names) {
    if(names.length === 0){
      return "no one likes this"
    }else if(names.length === 1){
      return `${names} likes this`
    }else if(names.length === 2){
       return `${names[0]} and ${names[1]} like this`
    }else if(names.length === 3){
       return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else{
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  }

  console.log(likes(['bob','susan']))//bob and susan like this
  console.log(likes([]))//no one likes this
  console.log(likes(['bob','susan','jquan','harold']))// bob, susan and 2 others like this
  console.log(likes(['bob']))//bob likes this
  console.log(likes(['bob','jack','susan','sam','bob','ben']))// bob, jack and 4 others like this 