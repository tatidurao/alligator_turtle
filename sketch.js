var garden,rabbit,apple,orangeL,redL, maofechada;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg,maofechadaImg;

var grouporange 

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("turtle aligator.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("maoaberta.png");
  redImg = loadImage("redImage.png");
  maofechadaImg = loadImage("maofechada.png");
}


function setup(){
  
  createCanvas(400,400);
// Plano de fundo móvel
garden=createSprite(200,200);
garden.addImage(gardenImg);


//criar menino correndo
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.2;
rabbit.addImage(rabbitImg);
rabbit.setCollider("rectangle",0,0,600,200)

grouporange = new Group()
}

function draw() {
  background(0);
  
  // menino movendo-se no eixo X com o mouse '
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
  
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrange();
    }else {
      createRed();
    }
  }
  if(grouporange.isTouching(rabbit)){
    for(var i=0;i<grouporange.length;i++){     
        
     if(grouporange[i].isTouching(rabbit)){
      //grouporange[i].destroy()
      grouporange[i].addImage(maofechadaImg);
          
         
          } 
    
    }
  }
}
function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
grouporange.add(orangeL)
console.log(grouporange)
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
redL.velocityY = 3;
redL.lifetime = 150;
}
