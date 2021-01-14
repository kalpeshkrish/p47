const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var p1,p2,p3,p4,p5,p6,p7,pin_img;
var lane_img,lane,bowl_img,bowl;
var count=0;
var angle=1;

function preload(){
lane_img=loadImage("court.png");
pimg=loadImage("pin.png");
bimg=loadImage("bowl.png");
pindown=loadImage("pinDown1.png");

}
function setup(){
createCanvas(displayWidth,displayHeight-147);
engine=Engine.create();
world=engine.world;


lane=createSprite(700,350);
lane.addImage(lane_img);
lane.scale=0.11;


pin1=createSprite(665,80);
pin1.addImage(pimg);
pin1.scale=0.15;

pin2=createSprite(715,60);
pin2.addImage(pimg);
pin2.scale=0.15;

pin3=createSprite(615,60);
pin3.addImage(pimg);
pin3.scale=0.15;

pin4=createSprite(765,80);
pin4.addImage(pimg);
pin4.scale=0.15;

pin5=createSprite(565,80);
pin5.addImage(pimg);
pin5.scale=0.15;

pin6=createSprite(815,60);
pin6.addImage(pimg);
pin6.scale=0.15;

pin7=createSprite(515,60);
pin7.addImage(pimg);
pin7.scale=0.15;

pin8=createSprite(665,120);
pin8.addImage(pimg);
pin8.scale=0.15;

pin9=createSprite(715,100);
pin9.addImage(pimg);
pin9.scale=0.15;

pin10=createSprite(615,100);
pin10.addImage(pimg);
pin10.scale=0.15;

bowl=createSprite(650,600);
bowl.addImage(bimg);
bowl.scale=0.15;

 b1=createSprite(350,60,200,10);
 b2=createSprite(250,400,10,1000);
 b3=createSprite(1100,400,10,1000);
 b4=createSprite(1000,60,230,10);



Engine.run(engine);
}
function draw(){
    background("lightyellow");
    bowl.rotation=angle+2;

   
    if(bowl.y<0){
    bowl.visible=false;

    }
    if(pin1.y<0){
      pin1.visible=false;
  
      }
      if(pin2.y<0){
         pin2.visible=false;
     
         }
       if(pin3.y<0){
            pin3.visible=false;
        
            }
       if(pin4.y<0){
               pin4.visible=false;
           
               }
       if(pin5.y<0){
        pin5.visible=false;
              
                  }
   if(pin6.y<0){
     pin6.visible=false;
                 
          }
          if(pin7.y<0){
            pin7.visible=false;
        
            }
            if(pin8.y<0){
               pin8.visible=false;
           
               }
               if(pin9.y<0){
                  pin9.visible=false;
              
                  }
                  if(pin10.y<0){
                     pin10.visible=false;
                 
                     }
    if(bowl.isTouching(pin1)){
       bowl.y=pin1.y+100;
       bowl.velocityY=-2;
       bowl.velocityX=0;
       pin1.addImage(pindown);
       pin1.velocityY=-3;
       count++;
    }
    if(bowl.isTouching(pin2)){
      bowl.y=pin2.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin2.addImage(pindown);
      pin2.velocityY=-3;
      count++;
   }
   if(bowl.isTouching(pin3)){
      bowl.y=pin3.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin3.addImage(pindown);
      pin3.velocityY=-3;
      count++;
   }
   if(bowl.isTouching(pin4)){
      bowl.y=pin4.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin4.addImage(pindown);
      pin4.velocityY=-3;
      count++;
   }
   if(bowl.isTouching(pin5)){
      bowl.y=pin5.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin5.addImage(pindown);
      pin5.velocityY=-3;
      count++;
   }
   if(bowl.isTouching(pin6)){
      bowl.y=pin6.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin6.addImage(pindown);
      pin6.velocityY=-3;
      count++;
   }
   if(bowl.isTouching(pin7)){
      bowl.y=pin7.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin7.addImage(pindown);
      pin7.velocityY=-3;
      count++;
   }
   if(bowl.isTouching(pin8)){
      bowl.y=pin8.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin8.addImage(pindown);
      pin8.velocityY=-3;
      count++;
   }
   if(bowl.isTouching(pin9)){
      bowl.y=pin9.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin9.addImage(pindown);
      pin9.velocityY=-3;
      count++;
   }
   if(bowl.isTouching(pin10)){
      bowl.y=pin10.y+100;
      bowl.velocityY=-2;
      bowl.velocityX=0;
      pin10.addImage(pindown);
      pin10.velocityY=-3;
      count++;
   }
   
    if(bowl.x>650 && count===0){

     
       
       
        
             bowl.velocityX+=0.05;
    }
    else if(bowl.x<650 && count===0){
   
      
             bowl.velocityX-=0.05;
    }
    if(bowl.isTouching(b1)){
       bowl.velocityX=0;
       bowl.velocityY=0;
       bowl.y=90;
    }
    if(bowl.isTouching(b2)){
      bowl.velocityX=0;
      bowl.velocityY=-3;
   }
   if(bowl.isTouching(b3)){
      bowl.velocityX=0;
      bowl.velocityY=-3;
   }
   if(bowl.isTouching(b4)){
      bowl.velocityX=0;
      bowl.velocityY=0;
   }
   if(pin4.isTouching(pin6)){
      pin6.addImage(pindown);
      pin4.velocityY=-3;
      pin6.velocityY=-3;
   }
   b1.visible=false;
   b2.visible=false;
   b3.visible=false;
   b4.visible=false;
    drawSprites();
   
}
function mouseDragged() 
{
  bowl.x=mouseX;
  bowl.y=mouseY;
bowl.visible=true;
  }
function mouseReleased(){

   //bowl.y=bowl.y-300;
   bowl.velocityY=-5;
  
}