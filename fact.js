//const prompt = require("prompt-sync")({ sigint: true });
// let n = prompt("enter factorial number: ");

function factorial(value) {
  let mul = 1;
  for (let i = 1; i <= value; i++) {
    mul *= i;
  }
  return mul;
}

// let n1 = prompt("enter fibonacci series: ");

// let a = 0;
// let b = 1;

// for (let i = 1; i <= n1; i++) {
//   console.log(a); //0 ,1 ,1,2,3
//   let fib = a + b; //1 ,2,3,5
//   a = b; //1 ,1,2,3
//   b = fib; // 1,2,3,5
// }

let array = [2, 5, 6, 4, 9]
let resultArray = []

for(let i = 0; i< array.length; i++) {
    resultArray.push(factorial(array[i]))
}

console.log(resultArray)


let text = "Hello world! is are am world";
let index = text.indexOf("world",7); // Returns 6
let notFound = text.indexOf("World"); // Returns -1 (case-sensitive)
console.log(index);
console.log(notFound);

// let text1 = "Hello world! Hello universe!";
// let lastIndex1 = text1.lastIndexOf("Hello"); // Returns 13
// let lastIndex2 = text1.lastIndexOf("hello"); // Returns -1 (case-sensitive)
// let lastIndex3 = text1.lastIndexOf("o"); // Returns 20
// let lastIndex4 = text1.lastIndexOf("o", 10); // Returns 7 (starts search from index 10)

// console.log(lastIndex1); // Output: 13
// console.log(lastIndex2); // Output: -1
// console.log(lastIndex3); // Output: 17
// console.log(lastIndex4); // Output: 7


// let text2 = "The quick brown fox jumps over the lazy dog. The quick brown fox is fast.";
// let firstIndex = text2.indexOf("quick"); // Returns 4
// let lastIndex = text2.lastIndexOf("quick"); // Returns 44

// console.log(firstIndex); // Output: 4
// console.log(lastIndex); // Output: 49


let course = "javascript";
let newStr = course.substring(2, 6);
console.log(newStr); // Output: "vasc";

let obj = {name: "Alice", age: 25};
let objStr = obj.name.toString();       // "[object Object]"

console.log(objStr);  // Output: "[object Object]"

// Custom toString method
let customObj = {
  name: "Alice",
  age: 25,
  toString: function() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
};

console.log(customObj.toString());  // Output: "Name: Alice, Age: 25"





