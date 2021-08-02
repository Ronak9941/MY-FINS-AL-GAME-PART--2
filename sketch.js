var bg;
var detective,detectiveImg;
var water1,water2,water3,water4,water5;
var thorn,key,head;
var headImg,head1,head2,head3;
var b1;
var openTreasureImg,openTreasure;
var gameState = "intro";
var titleIMG,title;
var b1,b2;
var textIMG,textS;




function preload(){
  bg = loadImage("intro.jpg");
  detectiveImg = loadImage("th.png")
  openTreasureImg = loadImage("openTreasure.png");
  titleIMG = loadImage("Duengeon Master.png");
  headImg = loadImage("head.jpg");
  textIMG = loadImage("button.png");
}
function setup() {
  createCanvas(1000,800);

   b1 = createImg("button.png");
   b1.position(510,450);
   b1.size(60,60);
   b1.mouseClicked(level1);

  title = createSprite(500,100);
  title.addImage(titleIMG);
  title.scale = 1.2;

   detective = createSprite(680,115,50,50);
   detective.addImage(detectiveImg);
   detective.scale = 0.1;

   textS = createSprite(280,640,20,20);
   textS.addImage(textIMG);
   textS.scale = 0.05
}
function draw() {
  background(bg); 
  
  if(keyDown("UP_ARROW")){
    detective.y = detective.y - 5;
  } 

  if(keyDown("DOWN_ARROW")){
    detective.y = detective.y + 5;
  } 

  if(keyDown("RIGHT_ARROW")){
    detective.x = detective.x + 5;
  } 
  
  if(keyDown("LEFT_ARROW")){
    detective.x = detective.x - 5;
  } 
  
  
  fill("red")
  textSize(30);
  text("PRESS       BUTTON TO START GAME",150,650)
  
  drawSprites();
}

function level1(){
  bg = loadImage("level1.jpg");

  title.visible = false;
  b1.position(0,0);
  b1.size (0,0);
  textS.visible = false;
  

  thorn = createSprite(267,542,65,65);
  thorn.visible = false;
  
  key = createSprite(440,40,50,50)
  key.visible = false;

  head = createSprite(735,610,50,50)
  head.visible = false;

  openTreasure = createSprite(95,600,50,50);
  openTreasure.visible = false;

   head1 = createSprite(850,680,20,20);
   head1.addImage(headImg);
   head1.scale = 1;
   head1.depth = detective.depth;
  detective.depth++

   head2 = createSprite(445,180,20,20);
   head2.addImage(headImg);
   head2.scale = 1;
   head2.depth = detective.depth;
   detective.depth++

   head3 = createSprite(150,690,20,20);
   head3.addImage(headImg);
   head3.scale = 1;
   head2.depth = detective.depth;
   detective.depth++
  
   b1 = createSprite(665,222,300,20);
   //b1.visible = false;
   
   b2 = createSprite(815,152,10,165);
   //b2.visible = false;

   b3 = createSprite(665,70,300,20);
   //b3.visible = false;

}

function level2(){

  bg = loadImage("l2.jpg");

} 