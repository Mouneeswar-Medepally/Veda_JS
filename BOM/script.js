
// const origin=window.location.origin
// const aboutUs=document.querySelector('button')
// aboutUs.addEventListener('click',()=>{
    // window.location.replace('/BOM/about.html')
    // window.location.reload(true)
    // const params = new URLSearchParams(window.location.search);
    // console.log(params.getAll('name'));
// })

// const ls=document.querySelector('button')
// ls.addEventListener('click',()=>{
//    localStorage.setItem('name','cams')
// })
// const lsName=localStorage.getItem('name');
// console.log(lsName)
// localStorage.removeItem('name')
// localStorage.clear()
// console.log(localStorage.length)

// const sessionSt=document.querySelector('button')
// sessionSt.addEventListener('click',()=>{
    // sessionStorage.setItem('name','cams')
    // console.log(sessionStorage.key(0))
    // console.log(sessionStorage.getItem('name'))
// })

const cookies=document.querySelector('button')
cookies.addEventListener('click',()=>{
    document.cookie='name=cams;'
    document.cookie='number=1;'
     document.cookie='age=23; httpOnly'
})

console.log(document.cookie)