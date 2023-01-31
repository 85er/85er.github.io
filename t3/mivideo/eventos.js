window.onload=()=>{

eventosClick();
}

function eventosClick(){

const boton_back = document.getElementById("back");
const boton_play = document.getElementById("play");
const boton_pause = document.getElementById("pause");
const boton_stop = document.getElementById("stop");

boton_back.addEventListener("click",()=>{
   const video = document.getElementById("video");
   video.currentTime = 0;
});
boton_play.addEventListener("click",()=>{
   const video = document.getElementById("video");
   video.play();
});
boton_pause.addEventListener("click",()=>{
   const video = document.getElementById("video");
   video.pause();
});
boton_stop.addEventListener("click",()=>{
   const video = document.getElementById("video");
   video.currentTime = 0;
   video.pause();
});

}

