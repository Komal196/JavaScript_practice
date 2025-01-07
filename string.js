const str ="racecar";

let newstr =str.split('').reverse().join('');

isPalindrome =newstr==str;

console.log(isPalindrome);

//Write a function that counts the number of vowels in a given string.

let str1="Hello Javascript";

let vowels ="aeiouAEIOU";
let count=0;

for(let char of str1){
if(vowels.includes(char)){
  count++;
}
}

console.log(count);
