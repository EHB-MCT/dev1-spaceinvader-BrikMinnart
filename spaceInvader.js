"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawSpaceInvader();

function drawSpaceInvader(){

// Background
 context.beginPath();
 context.rect(50,50,300,300);
 context.stroke();
 context.fill();

 // rect upper left
 context.fillStyle = "#39FF14"
 context.beginPath();
 context.rect(75,75,50,50);
 context.stroke();
 context.fill();

  // rect upper middle
  context.fillStyle = "#39FF14"
  context.beginPath();
  context.rect(175,75,50,50);
  context.stroke();
  context.fill();

   // rect upper right
 context.fillStyle = "#39FF14"
 context.beginPath();
 context.rect(275,75,50,50);
 context.stroke();
 context.fill();

   // rect 2nd line mid
   context.fillStyle = "#39FF14"
   context.beginPath();
   context.rect(175,125,50,50);
   context.stroke();
   context.fill();

   //rect 3th line
   context.fillStyle = "#39FF14"
   context.beginPath();
   context.rect(125,175,150,50);
   context.stroke();
   context.fill();

   //rect 4th line
   context.fillStyle = "#39FF14"
   context.beginPath();
   context.rect(75,225,250,50);
   context.stroke();
   context.fill();



 

}