//Arithmetic Operators:
//1.  What is the result of the following expression in JavaScript: 5 + 3 * 2?

console.log(5 + 3 * 2);

// 2.Explain how the modulo operator works with an example.

console.log(50%50);

//3.What is the output of 10 / 3 in JavaScript

console.log(10/3);

//Assignment Operators
//4.What is the difference between += and = in JavaScript? Provide an example.

let a=2;
let b=6;

console.log("Example of += =",a+=1, "and", a=a+6);
console.log("Ecample of = ", a=2);

//5.Given let x = 5, what is the result of x *= 2?

let x=5;

const result = x *= 2;
const result1 = x =x*2;  //both are equal
console.log(result);
console.log( result1);

//Comparison Operators:
//6.What is the difference between == and === in JavaScript?

let c = 2;
let d = "2";  //first change string to number then compare the value

console.log("c==d", c==d); //checking only value
console.log("c===d", c===d);

// 7. Explain what the < and > operators do with an example.

console.log("2 is smaller than 7",2<7); //true
console.log("2 is greater than 7",2>7); //false

// 8. How does the logical AND (&&) operator work in JavaScript? Provide an example.

console.log(2<4 && 9>4); //if both are true will get true otherwise false

//9.How does the logical OR (||) operator work in JavaScript? Provide an example.

console.log(2<4 || 4<7); //if one condition is true will get true otherwise false

//10. What is the result of true && false || true?

console.log(true && false || true);

//11.What is the difference between ++x and x++ in JavaScript?

x1 =2;
x2 =4;

console.log(++x1);
console.log(x2++);
console.log(x2);

//12.Given let y = 10, what is the result of -y?

let y = 10;
console.log(-y);


// 13.Write a JavaScript function that takes a number as an argument and 
//returns "Positive" if the number is greater than zero, "Negative" 
//if it's less than zero, and "Zero" if it's exactly zero.

function num(number){
    if(number>0){
        return "Positive";
    }else if (number < 0){
        return "negative";
    }else
      return "Zero";
}

console.log(num(-1)); 

//Switch Statement
//14. Write a switch statement in JavaScript that logs 
//"Red", "Green", or "Blue" depending on the value of a variable color.
// If the color is not recognized, it should log "Unknown color".

let color="Green";

switch (color){
    case "Red":
        console.log("Color should be "+"Red");
      break;
    case "Green":
        console.log("Color should be "+"Green");
        break;
    case "Blue":
        console.log("Color should be "+"Blue");
        break;
    default :
      console.log("Unknown color");
}

//Ternary Operator
//15.How does the ternary operator work in JavaScript? Write an example that checks if a number is even or odd.

a1 =40;

console.log((a1%2 ===0) ? "even" : "odd"); 

//Logical Operator
//Logical Operators in Conditions:
//16. How would you use the logical AND (&&) operator within an 
//if statement to check if a variable a is greater than 10 and less than 20?

let val =22;
if (val > 10 && val < 20){
  console.log("value will be "+ "true");
}else 
  console.log("value will be "+ "false");

// 17.  Write a condition using the logical OR (||) operator to check if a variable b is either 0 or 100.

let b1 = 100;

if(b1 == 0 || b1 == 100){
    console.log("right");
} 

//Q 18.

let c1 = 4;

console.log(c1 =- 2);

// 19. 

const prompt = require('prompt-sync')();
let score =prompt("Enter your score:");

if(score>=90 && score<=100 ){
    console.log("A");
}else if(score>=70 && score<=89){
    console.log("B");
}else if(score>=60 && score<=69){
    console.log("C");
}else if(score>=50 && score<=59){
    console.log("D");
}else if(score>=0 && score<=49){
    console.log("E");
}


//loop
//print 0 to 100 then i havt to print even no

// for (let num=0; num<=100; num++){
//     if(num%2 !==0){
//         console.log(num);
//     }
// }

//2. Sum of First N Natural Numbers
//Question: Write a loop to find the sum of the first N natural numbers.

let n=50;
let sum=0

for(let i=1; i<=n; i++){
 sum+=i;

}

console.log(sum);