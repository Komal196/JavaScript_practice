//Reverse
let str="Motuuauuuuuaaaa";

let newStr="";

for(let i=str.length-1; i>=0; i--){
    newStr+=str[i];
}

console.log(newStr);

//check if string is palindrome or not

let pald ="amadama";

let newP='';

for(let i=pald.length-1; i>=0; i--){
    newP+=pald[i];
}

if(newP==pald){
 console.log("Its Pelindrome");
}else{
    console.log("Not palindrome")
    
}

//FizzBuzz

function fizzBuzz(){

    for(let i=1; i<=100; i++){
       if(i%3==0){
        console.log("Fizz");
       } else if(i%5==0){
        console.log("Buzz");
       }else if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
       }else{
        console.log(i);
       }
    }
}

fizzBuzz();


     


