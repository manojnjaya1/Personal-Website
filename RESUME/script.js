// smooth scroll.........

var navMenuAnchorTags=document.querySelectorAll('.nav-menu a')
var interval;
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
         event.preventDefault();
         var sectionId=this.textContent.trim().toLowerCase();
         var tSection=document.getElementById(sectionId);
         interval= setInterval(scrollVertically,20,tSection);
    });
}
 function scrollVertically(tSection){
    var targetSectionCoordinates=tSection.getBoundingClientRect();
    if(targetSectionCoordinates.top<=0){
        clearInterval(interval);
    return;}
    window.scrollBy(0,50);

 }

 // Autofill skillbar....
  var progressBars=document.querySelectorAll('.skill-progress > div');
  //var skillsContainer=document.getElementById('skills-container');
 
 window.addEventListener('scroll',checkScroll);
//var animationDone=false;
function initialiseBar(bar){
   bar.setAttribute("data-visited",false);
   bar.style.width=0+'%';

}
for(var bar of progressBars){
    initialiseBar(bar);
}

function fillBar(bar){
  
       var targetWidth=bar.getAttribute('data-bar-width');
    var currentWidth=0;

    var interval=setInterval(function(){
   if(currentWidth>=targetWidth){
       clearInterval(interval);
       return ;
    }
       currentWidth++;
       bar.style.width=currentWidth+'% ';
    },10);
   

}
  function checkScroll(){
      //check weather skills sectn is visible;
      for(let bar of progressBars){
      let barcoordinates=bar.getBoundingClientRect();
      if((bar.getAttribute("data-visited")=="false") &&(barcoordinates.top<=(window.innerHeight-barcoordinates.height))){
         
          bar.setAttribute("data-visited",true);
          fillBar(bar) ;
      }else if(barcoordinates.top>window.innerHeight){
       // bar.setAttribute("data-visited",false);
            initialiseBar(bar);
      }
    }
  }