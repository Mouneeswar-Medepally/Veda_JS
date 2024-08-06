// try{
//     myFunc()
// }catch(error){
//     console.error(error)
// }
// // myFunc()
// console.log(1)

// function checkAge(age) {
//     if (age < 18) {
//       throw new Error('You must be at least 18 years old.');
//     }
//     return 'Access granted';
//   }
  
//   try {
//     checkAge(16);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }


// try{
//     const num=1;
//     num.toLowerCase()
// }catch(error){
//     if(error instanceof ReferenceError){
//         console.error(error)
//     }
//     if(error instanceof TypeError){
//         console.error(error)
//     }
//     console.log(error.message)
// }


// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.json(); // Parse the JSON response
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });
const ul=document.querySelector('ul')
const p=document.querySelector('p')

const displayList=(data)=>{
    data.forEach(element => {
        const li=document.createElement('li');
        li.textContent=element.title
        ul.appendChild(li)
    });
}
async function fetchData(url,isList) {
    try{
        const response=await fetch(url);
        if(!response.ok){
            throw new Error("Network request failed!")
        }
        const data=await response.json()
        if(isList){
            displayList(data)
        }
    }catch(err){
        p.textContent=err.message
        // console.error('There was a problem with the fetch operation:', err);
    }
}

fetchData('https://jsonplaceholder.typicode.com/todos',true)