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
// const ul=document.querySelector('ul')
// const p=document.querySelector('p')
// const div=document.querySelector('#toDoInfo');
// const divLoader=document.createElement('p');
// const divTitle=document.createElement('h1');
// const divUserId=document.createElement('p');
// const divMessage=document.createElement('p');
// const divError=document.createElement('p')
// div.append(divLoader,divTitle,divMessage,divUserId,divError)
// const handleButtonClick=(e)=>{
//     fetchData(`https://jsonplaceholder.typicode.com/todos/${e.target.id}`,false)
// }
// const displayList=(data)=>{
//     data.forEach(element => {
//         const li=document.createElement('li');
//         const button=document.createElement('button');
//         button.textContent=element.title;
//         button.setAttribute('id',element.id)
//         button.addEventListener('click',handleButtonClick)
//         li.appendChild(button)
//         ul.appendChild(li)
//     });
// }

// const displayItemData=(data)=>{
//     divLoader.textContent='';
//     divTitle.textContent=data.title;
//     divMessage.textContent=`isCompleted ${data.completed}`
//     divUserId.textContent=data.userId;
// }
// async function fetchData(url,isList) {
//     if(!isList){
//         divLoader.textContent='Loading...'
//         divTitle.textContent=null;
//         divMessage.textContent=null
//         divUserId.textContent=null
//     }
//     try{
//         const response=await fetch(url);
//         if(!response.ok){
//             throw new Error("Network request failed!")
//         }
//         const data=await response.json()
//         if(isList){
//             displayList(data)
//         }else{
//             displayItemData(data)
//         }
//     }catch(err){
//         if(!isList){
//             divError.textContent=err.message
//             divTitle.textContent=null;
//             divMessage.textContent=null
//             divUserId.textContent=null
//         }else{
//             p.textContent=err.message
//         }
//         // console.error('There was a problem with the fetch operation:', err);
//     }
// }

// fetchData('https://jsonplaceholder.typicode.com/todos',true)


// const myobj='{"name": "Alice", "age": 25}'
// const parsedObj=JSON.parse(myobj)
// console.log(typeof parsedObj)
// const jsonString = '{"name": "Alice", "birthYear": 1995}';
// const jsonObject = JSON.parse(jsonString, (key, value) => {
//     if (key === 'birthYear') {
//       return new Date().getFullYear() - value;
//     }
//     return value;
//   });
//   console.log(jsonObject)


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', // Specify the request method
    headers: {
      'Content-Type': 'application/json' // Specify the content type
    },
    body: JSON.stringify({
      name: 'CAMS',
      age: 24,
    }) // The payload is the data you want to send
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT', // Specify the request method
    headers: {
      'Content-Type': 'application/json' // Specify the content type
    },
    body: JSON.stringify({
      name: 'CAMS',
      age: 24,
      userId:1,
      id:1
    }) // The payload is the data you want to send
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });