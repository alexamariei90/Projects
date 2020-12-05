//creating a variable that will contain the text to be translated into whale talk
const input = 'Hello,  humans!';

//variable of vowels to be extracted from "input" 
const vowels = ['a', 'e', 'i', 'o', 'u'];


//place to store vowels found in "input" 
let resultArray = [];

//loop to iterate through "input" 
for (let inputIndex = 0; inputIndex < input.length; inputIndex++ ){ 
 //console.log('inputIndex is = ' + input[inputIndex]);

  //loop to iterate through "input" 
  for (let vowelsIndex = 0; vowelsIndex < vowels.length ; vowelsIndex++) {
    //console.log('vowelsIndex is ' + vowelsIndex);

    //conditional statement that compares vowels to input
    if ( input[inputIndex] === vowels[vowelsIndex] ) {
     
     //to double the e
      if (input[inputIndex] === 'e') {
        resultArray.push('ee');

    //to double the u
      } 
      else if (input[inputIndex] === 'u') {
        resultArray.push('uu');
      } 
      //to add the vowels from "input" to "resultArray"
      else {
      resultArray.push(input[inputIndex])
    }
   }
}
}
// to display an output without commas and with Upper case letters
console.log(resultArray.join('').toUpperCase());
