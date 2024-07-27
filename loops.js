/* Loops are used to repeatedly execute a block of code a certain number of times

Loops : 
For loop
While loop 
Do while loop

Control flow statements:
Break - to break/exit a loop when particular condition is satisfied
Continue - to skip the current iteration of loop when particular condition is satisfied

const arr= [1,2,3,4,5];
for(let i=0;i<=arr.length-1;i++){
    if(i<2){
        break;
    }
    console.log(arr[i]);
}


do while loop
do{
    ...code
}while(condition)

const arr=[1,2,3,4,5]
let i=-1;
do{
    console.log(arr[i])
    i++;
}while(i>0 && i<=arr.length-1)


While loop
while(condition){
   ...code
}

let i=0;

while(i<=arr.length-1){
    console.log(arr[i]);
    i++;
}



For loop :
for (initialization; condition; increment/decrement) {
    code to be executed
  }

  const arr=[1,2,3,4,5]
for(let i=0;i<=arr.length-1;i++){
    console.log(arr[i])
}
for..of loop
for(let element of arr){
    console.log(element)
}

const obj={
    name:'cams',
    age:'23'
}

for..in 

for(let index in arr){
    console.log(arr[index])
}

const obj={
    name:'cams',
    age:'23'
}
const objKeys=Object.keys(obj);
console.log(objKeys) // ['name','age']
for(let i=0;i<objKeys.length;i++){
    console.log(objKeys[i]) // 'name' , 'age'
    const oneKey=objKeys[i]
    console.log(obj[oneKey]) // 'cams', 23
}

const arr=[[1,2],[3,4]];
console.log(arr[0][0]) //1

const obj={
    address:{
        area: 'sr nagar'
    }
}
console.log(obj['address']['area']) // sr nagar



/*Nested Loops:
Nested loops are loops within loops. 
They are useful when you need to perform operations on multi-dimensional data like array of arrays, 
or when you need to combine multiple iterative processes

for(let i=2;i<=3;i++){
    for(let j=1;j<=10;j++){
        console.log(`${i} * ${j} =`,i*j)
    }
}
const arr1=[[1,2,3,4,5], ['a','b','c','d','e']];

for(let i=0;i<arr1.length;i++){
    const innerArr=arr1[i];
    console.log(innerArr)
    for(let j=0;j<innerArr.length;j++){
        console.log(innerArr[j])
    }
    console.log(`----------${i} index completed ------------`)
}
for(let arr1Elem of arr1){
    for(let innerArrElem of arr1Elem){
        console.log(innerArrElem)
    }
}
*/

// const arr=[1,2,3,4,5]
// let i=-1;
// do{
//     console.log(arr[i])
//     i++;
// }while(i>=0 && i<=arr.length-1)

const arr= [1,2,3,4,5];
for(let i=0;i<=arr.length-1;i++){
    console.log(arr)
    if(i>2){
        continue;
    }
    console.log(arr[i]);
}