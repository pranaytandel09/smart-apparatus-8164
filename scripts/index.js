
let data = JSON.parse(localStorage.getItem("user-data")) || [];

let signupbtn = document.getElementById("signup");
let loginbtn = document.getElementById("login");

let username = document.getElementById("username");
let password = document.getElementById("password");

signupbtn.addEventListener("click",(event)=>{
    event.preventDefault();

    let user = {
        name : username.value,
        password : password.value
    }

    data.push(user);

    localStorage.setItem("user-data",JSON.stringify(data));

    alert("Signed Up Successfully. Proceed to Login");
})

console.log(data);

loginbtn.addEventListener("click",(event)=>{
    event.preventDefault();
    let flag = false;
    data.map(element => {
        if(username.value == element.name && password.value == element.password){
            flag = true;
        }
    });

    if(flag){
        alert("Welcome Onboard !") ;
        window.location.href = 'Homepage.html';
    }
    else{
        alert("Wrong Credentials. Enter correct Username or Password");
    }
})

