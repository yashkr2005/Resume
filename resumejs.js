//smooth scroll function
var hash,interval;
var navselector=document.querySelectorAll('.Navigation a');
for(var i=0;i<navselector.length;++i)
{
    navselector[i].addEventListener('click',function(event)
    {
         event.preventDefault();
         var selectorID=this.textContent.trim().toLowerCase().split(" ").join("");
         var targetsection=document.getElementById(selectorID);
         console.log(targetsection);
          hash=this.hash;
        //   interval=setInterval(scrollingVertically,20,targetsection);
        interval=setInterval(function()
        {
            scrollingVertically(targetsection);
        },20,);
    });
}
function scrollingVertically(targetsection)
{

        var coordinates=targetsection.getBoundingClientRect();

          if(coordinates.top<=0)
          {
              
              clearInterval(interval);
              window.location.hash = hash
              return;
          }
          window.scrollBy(0,50);
     
}




// function intializebar()
// {
//     for(var bar of skillssectionid)
//     {
//         bar.
//     }
// }
var progressBars=document.querySelectorAll('.skill-progress > div');
var skillscontainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkscroll);
var animationDone=false;

function intializeBars()
{
    for(let bar of progressBars)
    {
        bar.style.width=0+'%';
    }
}
intializeBars();
function fillbars()
{
   for(let bar of progressBars)
   {
      let targetWidth=bar.getAttribute('data-bar-width');
      let currentWidth=0;
      let interval=setInterval(function(){
        if(currentWidth>targetWidth)
        {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width=currentWidth+'%';
      },3);
      
   }
}
function checkscroll()
{
    
    var coordinates=skillscontainer.getBoundingClientRect();
    if(!animationDone&&coordinates.top<=window.innerHeight)
    {
        animationDone=true;
        console.log('skills section is visible');
        fillbars();
    }
    else if(coordinates.top>window.innerHeight)
    {
        animationDone=false;
        intializeBars();
    }
}

// function intializebar()
// {
//     for(var bar of skillssectionid)
//     {
//         bar.style.width=0+'%';
//     }
// }
// intializebar();
// function fillbars()
// {
//     for(var bar of skillssectionid)
//     {
//          var skill_progress=bar.getAttribute('data-bar-width');
//          var curr=0;
//          var interval=setInterval(function()
//          {
//               if(curr>skill_progress)
//               {
//                  clearInterval(interval);
//                  return;
//               }
//               curr++;
//               bar.style.width=curr+'%';
//             //   this.style.backGroundcolor=curr;
//             //   curr+=5;

//          },5);
//     }
// }





// var animation=true;
// function checkscroll()
// {
//     var coordinates=document.getElementById('skills').getBoundingClientRect();
//     if(animation&&coordinates.top<=window.innerHeight)
//     {
//         animation=false;
       
//         fillbars();
//     }
// }











      
