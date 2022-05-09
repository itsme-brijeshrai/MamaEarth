document.querySelector('button').addEventListener('click',signUp);
var userArr = JSON.parse(localStorage.getItem('userData')) || [];

let f1 = document.getElementById('f1')
let f2 = document.getElementById('f2')
let alertP = document.getElementById('alertP')
let alertE = document.getElementById('alertE')



function signUp(){
    var phone = document.getElementById('signupContent-inp-a').value
    var username = document.getElementById('username').value
    var Email = document.getElementById('signupContent-inp-c').value;
    var pass = document.getElementById('signupContent-inp-d').value;

    var count = 0;
    for(var i = 0 ; i<Email.length;i++){
        if(Email[i] == '@'){
            count = 1
        }
    }

    if(count == 0){
        f2.style.borderColor = "red";
    alertE.textContent = "* INVALID EMAIL"
    alertE.style.color = "red";
    }else{
   
if(phone.length<10){
    
    f1.style.borderColor = 'red';
        alertP.textContent = "* INVALID PHONE NO"
        alertP.style.color = "red"
    
}else{

var userCredentials = {
    email:Email,
    passWord:pass,
    phoneNo:phone,
    userName:username,
    
};

userArr.push(userCredentials);
localStorage.setItem('userDetail',JSON.stringify(userArr));

alert('Signup Succesful')
window.location.href = "login.html"
}

}
}
