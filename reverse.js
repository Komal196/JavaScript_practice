let string="Prashant";

let newStr="";

for(let i=string.length-1; i>=0; i--){
    newStr+=string[i]
}

console.log(newStr);

//Using function
function str(val){
let newval="";
for(let i=val.length-1; i>=0; i--){
    newval+=val[i]
}
console.log(newval);
}

str("Komal");

//Using preDefined method

let nume="my wife name's Bharati";
 let newName=nume.split("").reverse().join("");

console.log(newName);




 