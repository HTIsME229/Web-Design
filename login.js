// let box=document.querySelector(".box_login")
let exitLogin = document.querySelector(".box_login .button");
let exitSignUp=document.querySelector(".box_signUp .button")
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
let button_login=document.querySelector(".button-login")
let box_login=document.querySelector(".box_login")
let button_Signup=document.querySelector(".button-signUp")
let box_button=document.querySelector(".box-button")
let box_signup=document.querySelector(".box_signUp")
let signUp=document.querySelector(".signup")
let mail_reg=document.querySelector(".box_signUp .email .content-input")
let pass_reg=document.querySelector(".box_signUp .password .content-input")
let check_box=document.querySelector(".check")

button_login.onclick=function(){
    box_button.style.display="none"
    box_login.style.display="initial"
}
button_Signup.onclick=function(){
 
    box_button.style.display="none"
    box_signup.style.display="initial"
}

signUp.onclick=function(){
    if(mail_reg.value!=""&&pass_reg.value!=""&&check_box.value)
    {
    box_button.style.display="none"

    box_signup.style.display="none"

    box_login.style.display="initial"}
  else if (mail_reg.value=="")
    alert(`Vui lòng Nhập Gmail`)
else if(mail_reg.value=="")
alert(`Vui lòng nhập password`)
else if(!check_box.value)
alert("Đồng ý điều khoản sử dụng")


}