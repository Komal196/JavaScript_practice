let array=[10,10,5,7,9,11,3,4,6]

let newArr=array[0];

for(let i=1; i<array.length; i++){
   if(array[i]>newArr) { //2>5s
    newArr=array[i];
   } 
    
}
console.log(newArr);


//function

function max1(arr){
   return Math.max(...arr)
}
 
let newOne=max1(array)
console.log(newOne);
