function dublc(val){
    let uniqueArr=[]
   for(let i=0; i<val.length; i++){
    if(!uniqueArr.includes(val[i])){
        uniqueArr.push(val[i])
    }
   }
   return uniqueArr;
}

const arr=[1,2,2,3,4,4,5]
let result=dublc(arr);
console.log(result);

//another

const arrr=[7,7,6,5,5,4,4,3,2,4,5,7,8,1];
let uniqueAr=[];
for(let i=0; i<arrr.length; i++){
    if(!uniqueAr.includes(arrr[i])){
      uniqueAr.push(arrr[i]);
    }
}

let res=uniqueAr.sort();
console.log(res);
