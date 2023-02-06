window.onload=()=>{

eventosClick();
}

function eventosClick(){

const boton_back1 = document.getElementById("back1");
const boton_play1 = document.getElementById("play1");
const boton_pause1 = document.getElementById("pause1");
const boton_stop1 = document.getElementById("stop1");

const boton_back2 = document.getElementById("back2");
const boton_play2 = document.getElementById("play2");
const boton_pause2 = document.getElementById("pause2");
const boton_stop2 = document.getElementById("stop2");

const boton_back3 = document.getElementById("back3");
const boton_play3 = document.getElementById("play3");
const boton_pause3 = document.getElementById("pause3");
const boton_stop3 = document.getElementById("stop3");

boton_back1.addEventListener("click",()=>{
   const video = document.getElementById("myVideo1");
   video.currentTime = 0;
});
boton_play1.addEventListener("click",()=>{
   const video = document.getElementById("myVideo1");
   video.play();
});
boton_pause1.addEventListener("click",()=>{
   const video = document.getElementById("myVideo1");
   video.pause();
});
boton_stop1.addEventListener("click",()=>{
   const video = document.getElementById("myVideo1");
   video.currentTime = 0;
   video.pause();
});

boton_back2.addEventListener("click",()=>{
   const video = document.getElementById("myVideo2");
   video.currentTime = 0;
});
boton_play2.addEventListener("click",()=>{
   const video = document.getElementById("myVideo2");
   video.play();
});
boton_pause2.addEventListener("click",()=>{
   const video = document.getElementById("myVideo2");
   video.pause();
});
boton_stop2.addEventListener("click",()=>{
   const video = document.getElementById("myVideo2");
   video.currentTime = 0;
   video.pause();
});

boton_back3.addEventListener("click",()=>{
   const video = document.getElementById("myVideo3");
   video.currentTime = 0;
});
boton_play3.addEventListener("click",()=>{
   const video = document.getElementById("myVideo3");
   video.play();
});
boton_pause3.addEventListener("click",()=>{
   const video = document.getElementById("myVideo3");
   video.pause();
});
boton_stop3.addEventListener("click",()=>{
   const video = document.getElementById("myVideo3");
   video.currentTime = 0;
   video.pause();
});

}

