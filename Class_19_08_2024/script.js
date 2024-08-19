
// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
// fetch('https://jsonplaceholder.typicode.com/todos',{
//     method:'GET',
//     headers:{
//         'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
//     }
// })
// // xhr.setRequestHeader('Authorization','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
// function get() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       console.log(JSON.parse(xhr.response));
//     }
//   };
// // xhr.onreadystatechange = get
// xhr.addEventListener('readystatechange',get)
// // Send the request
// xhr.send();


// const h1=document.querySelector('h1');
// console.log(h1.parentNode)

// const div=document.querySelector('div');
// console.log(div.childNodes);
// console.log(div.children)

// const h1=document.querySelector('h1');
// console.log(h1.nextSibling)
// console.log(h1.nextElementSibling);
// console.log(h1.previousElementSibling)

const div=document.querySelector('div');
// console.log(div.firstElementChild)
console.log(div.firstChild)
console.log(div.lastElementChild)
