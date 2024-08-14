// let a=1;
// export function multiply(b){
//     const result=a*b;
//     a++;
//     return result
// }
// export default a;
console.log("in es6Module.js")
const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
const data=await response.json()
export default data
