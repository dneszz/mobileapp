"use strict";
window.addEventListener("DOMContentLoaded",
  function() {
 $("header").textillate({
  loop: false, 
  minDisplayTime: 2000, 
  initialDelay: 2000,   
  autoStart: true,      
  in: {                 
    effect: "fadeInLeftBig", 
    delayScale: 1.5,         
    delay: 50,              
    sync: false,            
    shuffle: true          
  }
});
$(function(){
  ScrollReveal().reveal("#btn1", { duration: 9000 });
});
setTimeout (
  function() {
  let popMessage ="いらっしゃい!おみくじ引いてって!";
  window.alert(popMessage);
  },
  "5000"
  );
 }, false
);

const btn1 =document.getElementById("btn1");
btn1.addEventListener("click",
 function() {
  let n = Math.floor(Math.random() *3);
  
 switch (n) {
  case 0:
    btn1.textContent = "very Happy!!";
    btn1.style.color ="#ff0000";
    btn1.style.fontSize ="40px";
    break;   

  case 1:
    btn1.textContent ="Happy!";
    btn1.style.color ="fff001";
    btn1.style.fontSize ="30px";
    break;

  case 2:
    btn1.textContent ="unHappy...";
    btn1.style.color ="#261e1c";
    btn1.style.fontSize ="20px";
    break;
    
}
$(document).snowfall("clear");
    $(document).ready(function(){
      $(document).snowfall({
        maxSpeed : 5, 
        minSpeed : 1, 
        maxSize  : 20, 
        minSize  : 1, 
        image : 'img/sakura_hanabira.png'
      });
    });
},false
) ;
