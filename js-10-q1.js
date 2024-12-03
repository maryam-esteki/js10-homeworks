// Using an example, explain the difference between block,global and function scope in variables.
let global = 30
console.log(global)   //30
function func(){
    let str = "i am function scope"
    console.log(str)  // "i am function scope"
}
console.log(str)  //eror 

if(global > 30){
    const z = 30
    console.log(z)  // 30
}
console.log(z)  // eror