// let slide=document.querySelectorAll(".menu-film .film")
// console.log(slide)
// let slide_value=0;
// let reverse_value=0
// setInterval(function(){
    
    
//     if (slide_value>-475){
//         slide_value=slide_value-95;
//         reverse_value=slide_value;
//     console.log(slide_value)
//     for(let i=0 ;i<slide.length;i++)
//    slide[i].style.transform=`translateX(${slide_value}%)`}

//     if(slide_value == -475){
//         console.log(reverse_value)
//         reverse_value=reverse_value+95;
//         for(let i=0 ;i<slide.length;i++)
//         slide[i].style.transform=`translateX(${reverse_value}%)`}
//         if( reverse_value==0)
//         {
//             slide_value=reverse_value}
                 
// },5000)
setInterval(function(){
   
    
        let list =document.querySelectorAll(".film");
    

        document.querySelector('.slide').appendChild(list[0]);


            
},5000)
document.querySelector('.menu-film .click-ahead').onclick=function(){
    let list =document.querySelectorAll(".film");
    document.querySelector('.slide').appendChild(list[0]);
}
document.querySelector('.menu-film .click-back').onclick=function(){
    let list =document.querySelectorAll(".film");
    document.querySelector('.slide').prepend(list[list.length - 1]);
}
let arrow_menu = document.querySelector(".click-menu")
let menu= document.querySelector(".box-hidden")
console.log(menu);
arrow_menu.onclick =function(){
      menu.classList.toggle('translate-menu')
}