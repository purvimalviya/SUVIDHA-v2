const username_div = document.querySelector('.header-icons');
const logout_btn = document.querySelector('.logout_btn');
const nav_opener = document.querySelector('.nav');
const nav = document.querySelector('nav');

nav_opener.addEventListener('click',()=>{
    nav.classList.toggle('active');
})

window.addEventListener('load',()=>{
    let username = localStorage.getItem('login_username');
    if(username){
        username_div.querySelector('h4').innerText = username;
    }else{
        username_div.style.display = 'none';
    }
})

if(logout_btn){
    logout_btn.addEventListener('click',()=>{
        localStorage.removeItem('login_username');
        username_div.style.display = 'none';
        if(logout_btn.classList.contains('fromWant')){
            location.href = 'index.html';
        }
    })
}