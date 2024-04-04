let box=document.querySelector(".box_login")
let exit = document.querySelector(".button");
exit.onclick = function(){

    box.classList.add("exit")
      
};
document.onkeydown = function (e) {
    switch (e.which){
        case 27:
            box.classList.add("exit")
break;
    }
};
