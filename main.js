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
}
}
let arrowEpisode_back

 arrowEpisode_back= document.querySelector(".heading .click-back");
 
arrowEpisode_back.onclick=function(){
   if(translateValue < 0)
   translateValue=translateValue+50
   for (let i=0;i<episode_list.length;i++)
   {
      episode_list[i].style.transform = `translateX(${translateValue}%)`;

   }
}
//  code for movieSimilar
let arrow_movieSimilar = document.querySelector(".list-similarMovie .click-ahead")

let similarMovie_list= document.querySelectorAll(".list-similarMovie .for-similar")
let translateValue_movieSimilar=0;
arrow_movieSimilar.onclick =function(){
   if(translateValue_movieSimilar>-50)
   translateValue_movieSimilar=translateValue_movieSimilar-50;
   for (let i=0;i<similarMovie_list.length;i++)
   {
   similarMovie_list[i].style.transform = `translateX(${translateValue_movieSimilar}%)`;

}
}
let arrow_movieSimilarBack

arrow_movieSimilarBack= document.querySelector(".list-similarMovie .click-back");
 
arrow_movieSimilarBack.onclick=function(){
   if(translateValue_movieSimilar < 0)
   translateValue_movieSimilar=translateValue_movieSimilar+50
   for (let i=0;i<similarMovie_list.length;i++)
   {
      similarMovie_list[i].style.transform = `translateX(${translateValue_movieSimilar}%)`;

   }

}
// code for menu
let arrow_menu = document.querySelector(".click-menu")
let menu= document.querySelector(".box-hidden")
arrow_menu.onclick =function(){
      menu.classList.toggle('translate-menu')
}
// code JS main.html



 
 