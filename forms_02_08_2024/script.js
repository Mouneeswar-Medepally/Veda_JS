const form = document.forms[0];
const errorElement=document.querySelector('#errorText')
// const formData = new FormData(form);
// console.log(formData)
// const myName=formData.get('userName');
// console.log(myName)
// const password=formData.get('password');
// console.log(password)
// const allUsers=formData.getAll('userName');
// console.log(allUsers)
// formData.set('username', 'JaneDoe');
// console.log(formData.get('username'))
// console.log(formData.get('userName');

// const userName=form.elements['userName']
// const password=form.elements['password'];
// userName.addEventListener('keydown',(e)=>{
//     console.log(e.target.value)
// })
// password.addEventListener('keydown',(e)=>{
//     console.log(e.target.value)
// })
// console.log(userName,password)

// const myRadios=form.elements['gender'];
// myRadios.forEach((radio=>{
//     radio.addEventListener('change',(e)=>{
//         console.log(e.target.value)
//     })
// }))

// const myCheckbox = form.elements['myCheckbox'];
// myCheckbox.addEventListener('mouseup', (e) => {
//     if(e.target.checked){
//         console.log(e.target.value);
//         return;
//     }
//     console.log(e.target.checked)
// })

// const mySelect = form.elements['mySelect'];
// mySelect.addEventListener('change', (e) => {
//         const options=e.target.options;
//         const selectedOption=options[options.selectedIndex];
//     })

// const myFile = form.elements['myFile'];
// myFile.addEventListener('change', (e) => {
//        console.log(e.target.files)
//     })

// const reset = form.elements['reset'];
// reset.addEventListener('reset', (e) => {
//        console.log(e.target)
//     })

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const formData = new FormData(e.target);
    for(let [key,value] of formData.entries()){
        if(key==='userName' && !value){
            errorElement.textContent="User Name required!"
        }
        if(key==='password' && !value){
             errorElement.textContent="Password required!"
        }
    }
})
