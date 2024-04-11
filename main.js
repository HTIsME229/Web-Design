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
   if(translateValue>-150){
      arrowEpisode_back.style.opacity="1"

   translateValue=translateValue-50;
   for (let i=0;i<episode_list.length;i++)
   {
   episode_list[i].style.transform = `translateX(${translateValue}%)`;
}}
    if(translateValue===-150)
   arrow_episode.style.opacity="0"

}
let arrowEpisode_back

 arrowEpisode_back= document.querySelector(".heading .click-back");

arrowEpisode_back.onclick=function(){
   if(translateValue < 0 ){
   arrow_episode.style.opacity="1"
   translateValue=translateValue+50
   console.log(translateValue)
   for (let i=0;i<episode_list.length;i++)
   {
      episode_list[i].style.transform = `translateX(${translateValue}%)`;

   }}
   if(translateValue===0) {
      arrowEpisode_back.style.opacity="0"
   }
}
if(translateValue===0) {
   arrowEpisode_back.style.opacity="0"
}

//  code for movieSimilar
let arrow_movieSimilar = document.querySelector(".list-similarMovie .click-ahead")

let similarMovie_list= document.querySelectorAll(".list-similarMovie .for-similar")
let translateValue_movieSimilar=0;
arrow_movieSimilar.onclick =function(){
   if(translateValue_movieSimilar>-50){
   arrow_movieSimilarBack.style.opacity='1'
   translateValue_movieSimilar=translateValue_movieSimilar-50;
   for (let i=0;i<similarMovie_list.length;i++)
   {
   similarMovie_list[i].style.transform = `translateX(${translateValue_movieSimilar}%)`;
}
if(translateValue_movieSimilar===-50){
   arrow_movieSimilar.style.opacity="0"
}
}
}
let arrow_movieSimilarBack

arrow_movieSimilarBack= document.querySelector(".list-similarMovie .click-back");
 
arrow_movieSimilarBack.onclick=function(){
   if(translateValue_movieSimilar < 0){
   arrow_movieSimilar.style.opacity="1"

   translateValue_movieSimilar=translateValue_movieSimilar+50
   for (let i=0;i<similarMovie_list.length;i++)
   {
      similarMovie_list[i].style.transform = `translateX(${translateValue_movieSimilar}%)`;

   }}
if(translateValue_movieSimilar===0)
{
   arrow_movieSimilarBack.style.opacity='0'
}
}
if(translateValue_movieSimilar===0)
{
   arrow_movieSimilarBack.style.opacity='0'
}

// code for menu
let arrow_menu = document.querySelector(".click-menu")
let menu= document.querySelector(".box-hidden")
arrow_menu.onclick =function(){
      menu.classList.toggle('translate-menu')
}
// code JS main.html



 
 