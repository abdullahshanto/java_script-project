const next = document.querySelector(".next");
const img = document.querySelectorAll("img");
//console.log(img.length);
const slide = document.querySelector(".image");
let currtime = 1;

const prev =document.querySelector(".prev");
let timeout;

next.addEventListener('click',()=>
{
   currtime++;
   clearTimeout(timeout);
   updateTime();
   //console.log(currtime);


})

prev.addEventListener('click', () => {
  currtime--;
     clearTimeout(timeout);
  updateTime();
});

function updateTime()
{
  if(currtime > img.length)
  {
    currtime  = 1;
  }
  else if(currtime <1)
  {
    currtime=img.length;
  }
     slide.style.transform=`translateX(-${(currtime-1)*500}px)`;

   timeout = setTimeout(()=>{
    currtime++;
    updateTime();
   },3000)  
}