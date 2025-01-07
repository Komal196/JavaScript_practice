const obj={
    name:"Komal",
    age:24,
    status:"married"
}

console.log(obj);

obj["address"]="panapur";
console.log(obj);

const arr=[1,2,3,4,5,0,0,0,1,3,3,4];
 arr.pop()
 console.log(arr);
 arr.push(44)
 console.log(arr);
 
 arr.shift()
 console.log(arr);
 
 arr.unshift(10)
 console.log(arr);
 
 var a=["Komal","Bhrati"];
 var b=["Kumar","Prashant"]
 var d=["pagal"]
 var c=a.concat(b,d);

 console.log(c);

 var e= b.concat("mental");
 console.log(e);
 
 //obj

 let pbj={
    name:"Komal",
    PAtiname:"prashant",
    printName: function(){
        console.log(this.PAtiname);
        
    }
 }

 console.log(pbj.name);
 pbj.printName();
 