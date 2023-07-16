const username_div = document.querySelector('.header-icons');

window.addEventListener('load',()=>{
    let username = localStorage.getItem('login_username');
    if(username){
        username_div.querySelector('h4').innerText = username;
    }else{
        username_div.style.display = 'none';
    }
})