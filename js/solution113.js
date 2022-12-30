var greet = function(name) {
    x = name.split('').slice(0,1).join('').toUpperCase()+name.split('').slice(1).join('').toLowerCase()
   

    

    return `Hello ${x}!`
  };

  console.log(greet('jon'))
  console.log(greet('Sam'))
  console.log(greet('xavi'))