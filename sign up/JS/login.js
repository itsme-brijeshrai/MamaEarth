let f1 = document.getElementById('f1')
let f2 = document.getElementById('f2')
let alertP = document.getElementById('alertP')
let alertE = document.getElementById('alertE')

document.querySelector("button").addEventListener('click',signIn);
  var regdUsers = JSON.parse(localStorage.getItem('userDetail'));

  console.log(regdUsers)

  function signIn(){
      var emailL = document.querySelector('#login-username').value;
      var passL = document.querySelector('#login-password').value;

      var obj = {email: emailL , login:'true', name:" "}

      var rE = regdUsers[0].email
      var rP =regdUsers[0].passWord

      
      
      var count1 = 0
      var count2 = 0
      
         for(var i = 0 ; i<rE.length ; i++){
             if(rE[i] == emailL[i]){
                 count1 = 1;
             }
             else{
                 count1 = 0;
             }
         }
         if(count1 == 0){
          f1.style.borderColor = "red"
          alertE.textContent = "* Wrong Email"
          alertE.style.color = "red"
          
          setTimeout(delayEmail ,2500)
         
         }
         function delayEmail(){
            window.location.reload()
         }

         for(var i = 0 ; i<rP.length ; i++){
             if(rP[i] == passL[i]){
                 count2 = 1;
             }
             else{
                 count2 = 0;
             }
         }
         if(count2 == 0){
          f2.style.borderColor = "red"
          alertP.textContent = "* Wrong Password"
          alertP.style.color = "red"
         
          setTimeout(delayPassword ,2500)
         }
         function delayPassword(){
            window.location.reload()
         }

         if(count1 == 1 && count2 == 1){
             alert('login success')
             window.location.href = 'index.html'
         }      
  }


