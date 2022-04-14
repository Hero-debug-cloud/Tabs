document.querySelector(".head-1").classList.add('color_white');


var his=document.querySelector(".head-1");
his.addEventListener('click',function(){
    document.querySelector(".con-2").classList.add('hidden');
    document.querySelector(".con-3").classList.add('hidden');
    document.querySelector(".con-1").classList.remove('hidden');

    document.querySelector(".head-1").classList.add('color_white');
    document.querySelector(".head-2").classList.remove('color_white');
    document.querySelector(".head-3").classList.remove('color_white');
});





var vision=document.querySelector(".head-2");
vision.addEventListener('click',function(){
    document.querySelector(".con-1").classList.add('hidden');
    document.querySelector(".con-3").classList.add('hidden');
    document.querySelector(".con-2").classList.remove('hidden');
    //head-1,head-2,head-3 color change
    document.querySelector(".head-1").classList.remove('color_white');
    document.querySelector(".head-2").classList.add('color_white');
    document.querySelector(".head-3").classList.remove('color_white');
    
});




var goals=document.querySelector(".head-3");
goals.addEventListener('click',function(){
    document.querySelector(".con-1").classList.add('hidden');
    document.querySelector(".con-2").classList.add('hidden');
    document.querySelector(".con-3").classList.remove('hidden');
    
    document.querySelector(".head-1").classList.remove('color_white');
    document.querySelector(".head-2").classList.remove('color_white');
    document.querySelector(".head-3").classList.add('color_white');
});
