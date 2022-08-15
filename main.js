// var x = new Audio("https://www.geetganga.org/files/audio/Sare-Jahan-Se-Acha.mp3");
var x = new Audio("bharat-ka-rahnewala-hoon-purab-aur-pachim-128-kbps-sound.mp3");

var playing = false;
document.querySelector("button").addEventListener("click",function playMusic(){
  if(!playing){
    x.play();
    x.currentTime=0;
    playing = !playing;
  }else{ 
    x.pause();
    playing = !playing;   
  }
});