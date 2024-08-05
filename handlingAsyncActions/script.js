// const promise = new Promise((onSuccess, onFailure) => {
//     // Asynchronous operation
//     setTimeout(() => {
//         const success = false; // Simulating a condition
//         if (success) {
//             onSuccess('Operation completed successfully.');
//         } else {
//             onFailure('Operation failed.');
//         }
//     }, 1000);
// });
// console.log(promise)
// promise
//     .then((result) => {
//         console.log(promise)
//         console.log(result); // "Operation completed successfully."
//     })
//     .catch((error) => {
//         console.log(promise)
//         console.error(error); // "Operation failed."
//     });

// const firstPromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject('First result');
//     }, 1000);
// });

// const secondPromise=firstPromise
//     .then((result) => {
//         console.log("in")
//         console.log(result); // "First result"
//         return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 reject('Second result');
//             }, 1000);
//         });
//     });
// secondPromise.then((result) => {
//     console.log(result); // "Second result"
// })
// .catch((error) => {
//     console.log("in catch")
//     console.error(error);
// });


const promise1 = new Promise((resolve,reject) => setTimeout(resolve, 500, 'one'));
const promise2 = new Promise((resolve,reject) => setTimeout(reject, 500, 'two'));

// Promise.all([promise1, promise2]).catch((values) => {
//     console.log(values); // ["one", "two"] after 2 seconds
// });
// Promise.race([promise1, promise2]).then((values) => {
//     console.log(values);
// });
// console.log("all",Promise.all([promise1, promise2]))
// console.log("settled",Promise.allSettled([promise1, promise2]))
// Promise.all([promise1, promise2]).catch((values) => {
//     console.log(values);
// })

const allSettledPr=Promise.allSettled([promise1, promise2])
allSettledPr.then((values)=>{
    values.forEach((value)=>{
        if(value.status==='fulfilled'){
            console.log(value);
        }
        if(value.status==='rejected'){
            console.error("Some error occured!");
        }
    })
   
})
console.log(allSettledPr)

// const allPr=Promise.all([promise1, promise2])
// allPr.then((values)=>{
//     console.log(values);
// }).catch(error=>console.log(error))

// async function fetchData() {
//     return 'some data';
// }
// fetchData.then()

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success=false;
//             if(success){
//                 resolve('some data');
//             }
//             else{
//                 reject('error');
//             }
//         }, 1000);
//     });
// }

// async function getData() {
//     try {
//         const data = await fetchData();
//         console.log('print something')
//         console.log(data); // "some data" after 1 second
//     } catch (error) {
//         console.log("in catch")
//         console.error(error);
//     }finally{
//         // console.log('print something')
//     }
// }


// getData();