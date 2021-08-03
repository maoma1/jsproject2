/*write a JavaScript function that accepts a string as a parameter
 and counts the number of vowels within the string.
 step 1 : declare a constant with an array of vowels both in both caps and 
 lowercase letters ie will be 10 in total
 step 2 declare a function "getVowelCount(l)" with condition within
  the curly braces that splits l into indidvidual letters and then use the
   .includes to count if vowels are found
  
 */


   const str = 'The reason I love to code';
   const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
   
   function getVowelCount(str) {
     var letters = str.split('');
     let count = 0;
     for(var i = 0; i < str.length; i++) { 
     if (letters[i].includes(vowels))  
       return  count++ ;
   }
  
   
   }
   
     console.log(getVowelCount('The reason I love to code'));
   