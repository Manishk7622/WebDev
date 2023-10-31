// Reverse a string

let a="Manish";
let b= a.split("");
let answer="";
for(let i=b.length-1; i>=0; i--){
    answer+=b[i];
}
console.log(answer);