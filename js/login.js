const login__btn = document.querySelector('.login__btn');
const login__email = document.querySelector('.login__email');
const login__password = document.querySelector('.login__password');

const URL = 'https://suvidha-backend.vercel.app/auth';

login__btn.addEventListener('click',async()=>{
    try {
        let body = {
            email: login__email.value,
            password: login__password.value,
        }
        let res = await fetch(`${URL}/login`,{
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': "application/json"
            }
        });
        let data = await res.json();
        console.log(data);
        if(data.status == "success") {
            localStorage.setItem('login_username',data.name);
            location.href = "index.html";
        }
    } catch (error) {
        console.log(error);
    }
})