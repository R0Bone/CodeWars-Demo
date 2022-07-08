// capitalize each word in a given string using the String.prototype

String.prototype.toJadenCase = function () {
    
     let result = this.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }).join(' ')
    
      return result
  };
  console.log('home alone goes to new york'.toJadenCase())// 'Home Alone Goes To New York'