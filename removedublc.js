function removeDub(num){
    const result=[];
for (let i=0; i<num.length; i++){
  if(!result.includes(num[i])){
     result.push(num[i])
  }
 }
 return result
}

const arr=[1,6,2,3,8,3,4,5,4,3,2]
let uniqueArr=removeDub(arr);
console.log(uniqueArr);
// ---------------------------------------

function reverseString(str){
   let newStr="";
for(let i=str.length-1; i>=0; i--){
 newStr +=str[i];
}
console.log(newStr);

}

let val="Ramayan";
reverseString(val)

//max

const arr1=[6,5,3,8,5,9,2]

let max=arr1[0];
for(let i=1; i<arr1.length; i++){
if(arr1[i]> max) //5>6
max=arr1[i]
}

console.log(max);
