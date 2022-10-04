/*The goal of this exercise is to convert a string to a new string where each character 
in the new string is "(" if that character appears only once in the original string, or ")"
 if that character appears more than once in the original string. Ignore capitalization when 
 determining if a character is a duplicate.*/


function duplicateEncode(word){
   
        
        word = word.toLowerCase();
       
        let unique = '';
     
          for (let i = 0; i < word.length; i++) {
                 /*'din'              'd'        'din'          'd'
                 'din'             'i'         'din'          'i'
                 'din'              'n'         'din'          'n'*/
               //essentially  if 0 === 0
               //             if 1 === 1
               //             if 2 === 2
            if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
      
              unique += '(';
            } else
      
            unique += ')';
          }
        
          return unique;
        
        
}

console.log(duplicateEncode('din'))//=>  "((("