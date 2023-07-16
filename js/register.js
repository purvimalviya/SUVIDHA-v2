const register_btn = document.querySelector('.register__btn');
const register_name = document.querySelector('.register__name');
const register_email = document.querySelector('.register__email');
const register_password = document.querySelector('.register__password');

const URL = 'https://suvidha-backend.vercel.app/auth';

register_btn.addEventListener('click', async ()=>{
    try {
        let body = {
            name: register_name.value,
            email: register_email.value,
            password: register_password.value
        }
        let res = await fetch(`${URL}/register`,{
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': "application/json"
            }
        });
        let data = await res.json();
        console.log(data);
        if(data.status == "success"){
            localStorage.setItem('login_username',data.name);
            location.href = "index.html";
        }
    } catch (error) {
        console.log(error);
    }
})