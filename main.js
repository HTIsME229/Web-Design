let arrow = document.querySelector(".click-ahead");
let castList = document.querySelectorAll(".five-cast")
arrow.onclick =function(){
   for (let i=0;i<castList.length;i++)
   {
    castList[i].classList.add("trans-ahead");
   }
}
let arrow_back= document.querySelector(".click-back");
arrow_back.onclick=function(){
   for (let i=0;i<castList.length;i++)
   {
    castList[i].classList.remove("trans-ahead");
   }
}

