// Write a loop to filter even in an array

array =[444,443,-3,-4,-9,-12,15,16,18,9]

for(let i=0; i<=array.length; i++){
    if (array[i]%2 == 0){
        console.log("print even "+ array[i]);
    }
}

array1 =[444,443,-3,-4,-9,-12,15,16,18,9]

let sum =0;
for(let i=0; i<array1.length; i++){
 sum +=array[i];
}

console.log(sum);

array2 =[444,443,-3,-4,-9,-12,15,16,18,9]

for(let i=array2.length-1; i>0; i--){
 console.log(array2[i]);
}

array3 =[1,2,3,4,5,6,6,"6"]

let count=0;

for(let i =0; i<array3.length; i++){
    if(array3[i] ===6){
        count +=1
    }
    
}
console.log(count);

let n=10;

while (n>=1){
    console.log(n);
    n--;
}

let array4 =[3,1,0,5,9,2]

console.log(array4);

let min = array4[1]

for(let i=1; i<array4.length; i++){
    let index = i; //i==1 
    while(index >= 0 && array4[index] < array4[index -1]) {
        let a = array4[index];
        array4[index] = array4[index-1];
        array4[index-1] = a;
        index--;
    }
}

console.log(array4);

//min

let num=[7,25,10,6,4,3];
min =num[0];

for(let i=1; i<num.length; i++){
    if(num[i]<min){
        min=num[i]
    }
}

console.log(min);


//max 
let num1=[3,7,25,10,6,4];
max =num[0];  //3

for(let i=1; i<num.length; i++){
    if(num1[i]>max ){ //if num[i] is greater tha max then update max to be this current element
        max=num1[i]  //25
    }
}

console.log(max);

//fibonacci

let a=0;
let b=1;

while(a<10){
    console.log(a);
    let c=a+b;
     a=b;
     b=c;
}


