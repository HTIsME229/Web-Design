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
let arrow_episode = document.querySelector(".heading .click-ahead")
let episode_list= document.querySelectorAll(".for-episode")
let translateValue=0;
arrow_episode.onclick =function(){
   if(translateValue>-150)
   translateValue=translateValue-50;
   for (let i=0;i<episode_list.length;i++)
   {
      
   //  episode_list[i].classList.add("trans-aheadEpisode");
   // document.episode_list[i].style.transform = "translateX(-100%)";
   episode_list[i].style.transform = `translateX(${translateValue}%)`;
console.log(translateValue)
}
}
let arrowEpisode_back

 arrowEpisode_back= document.querySelector(".heading .click-back");
 console.log(translateValue)
 
arrowEpisode_back.onclick=function(){
   if(translateValue < 0)
   translateValue=translateValue+50
   for (let i=0;i<episode_list.length;i++)
   {
      episode_list[i].style.transform = `translateX(${translateValue}%)`;

   }
   console.log(translateValue)
}
 