var target,target1;
var person,person1;
var bullet,bullet1;
var top;
var decreaseSpeed;
var score=0;
var edges;
var gameState;

function preload (){
target=loadImage("images/target2.png");
person=loadImage("images/Person1.png")
bullet=loadImage("images/bullet1.png")


}
function setup() {
  createCanvas(displayWidth,700);

  edges=createEdgeSprites();
  if(gameState===0){

  
  target1=createSprite(100,480,200,200); 
  target1.addImage(target);
  target1.velocityY=10;


  person1=createSprite(1400,450,200,200);
  person1.addImage(person);

  bullet1=createSprite(1270,400,50,50);
  bullet1.addImage(bullet);
  bullet1.scale=0.3;
  bullet1.visible=false;
  }
}

function draw() {
  background("yellow"); 
   if(gameState=1){
 // top=createEdgeSprites();
 text("Score:"+score,500,200);
  target1.bounceOff(edges[2]);
  target1.bounceOff(edges[3]);

  if(keyWentDown("space")){
    bullet1.visible=true;
    bullet1.velocityX= random(-500,-200);
  }
 console.log(bullet1.velocityX);
   if(bullet1.collide(target1)){
    textSize(200);
    text("You Won",500,200);
    score=score+1;
   bullet.velocityX=0;
  }
  else{
    reset();
  }
}
  drawSprites();
}

function reset(){
  gameState=0;
score=0;
bullet1.x=500;

}