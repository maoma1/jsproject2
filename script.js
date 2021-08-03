/* 
step 1 : Write a JavaScript function that accepts a string as a parameter
step 2 : declare a variable with a list of all the vowels both in uppercase and lowwercase.
step 3: write a function that splits the sentence/string into individual letters
step 4: create a loop that "filters" every word in the string and if == to a vowel to count up

and then commit to github
*/

const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o','U','u']

         function getVowelCount(i) {
           let indLetters = i.split('') 
             
           
           return indLetters.filter(indLetter => vowels.includes(indLetter)).length
   
         }
         
         console.log(getVowelCount('I love to code'));
