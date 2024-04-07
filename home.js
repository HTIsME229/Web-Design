let slide=document.querySelectorAll(".menu-film .film")
console.log(slide)
let slide_value=0;
let reverse_value=0
setInterval(function(){
    
    
    if (slide_value>-475){
        slide_value=slide_value-95;
        reverse_value=slide_value;
    console.log(slide_value)
    for(let i=0 ;i<slide.length;i++)
   slide[i].style.transform=`translateX(${slide_value}%)`}

    if(slide_value == -475){
        console.log(reverse_value)
        reverse_value=reverse_value+95;
        for(let i=0 ;i<slide.length;i++)
        slide[i].style.transform=`translateX(${reverse_value}%)`}
        if( reverse_value==0)
        {
            slide_value=reverse_value}
                 
},5000)