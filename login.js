// let box=document.querySelector(".box_login")
let exitLogin = document.querySelector(".box_login .button");
let exitSignUp=document.querySelector(".box_signUp .button");
let button_login=document.querySelector(".button-login");
let box_login=document.querySelector(".box_login");
let button_Signup=document.querySelector(".button-signUp");
let box_button=document.querySelector(".box-button");
let box_signup=document.querySelector(".box_signUp");
let signUp=document.querySelector(".signup");   

exitLogin.onclick = function(){

       box_login.style.display="none"
       box_button.style.display="initial"

      
};
exitSignUp.onclick = function(){

    box_signup.style.display="none"
    box_button.style.display="initial"

   
};
document.onkeydown = function (e) {
    switch (e.which){
        case 27:
            box_login.style.display="none"
       box_button.style.display="initial"
       box_signup.style.display="none"
break;
    }
};




signUp.addEventListener('click',function () {
    event.preventDefault()
    let check_box=document.querySelector(".check").checked; 

    let pass_reg=document.querySelector(".box_signUp .password .content-input").value;
    
    let mail_reg=document.querySelector(".box_signUp .email .content-input").value;
    if(mail_reg!=""&& pass_reg!=""&& check_box)
 {     
      box_login.style.display="block";
 box_button.style.display="none";
    box_signup.style.display="none";
}
else if(mail_reg=="")
  alert(`Nhap Mail`)
else if(pass_reg=="")
alert(`Nhap Password`)
else
alert(`Xác nhận điều khoản`)
})
button_login.onclick=function(){
    box_button.style.display="none"
    box_login.style.display="initial"
}
button_Signup.onclick=function(){
 
    box_button.style.display="none"
    box_signup.style.display="initial"
}
