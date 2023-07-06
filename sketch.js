var jorge_correndo, jorge_colidido;
var cenario,cenarioInvisivel,cenarioImage;
var obstacle1


function preload(){
  jorge_correndo = loadAnimation("a.png")
  jorge_colidido = loadAnimation("triste.png")

  cenarioImage = loadImage("cenario.png")

  cactoImg = loadImage("cacto.png")
  //carregue a imagem de gameOver


}

function setup() {
  createCanvas(350, 350);

  cenario = createSprite(600, 161);
  cenario.addImage("cenario",cenarioImage);
  cenario.x =cenario.width /2;
  cenario.velocityX = -4;
  cenario.scale = 1.2
  //crie a sprite de game over

  //add a imagem na sprite

  //deixe a sprite invisível


  jorge = createSprite(150, 250);
  jorge.addAnimation("correndo", jorge_correndo);
  //jorge.addAnimation("colidido", jorge_colidido)

  jorge.scale = 0.08;

  cenarioInvisivel = createSprite(200,300,400,10);
  cenarioInvisivel.visible = false;
  //crie o grupo de cactos aqui


}

function draw() {
background(180);

  if(keyDown("space")&& jorge.y >= 230) {
    jorge.velocityY = -10;

  }

  jorge.velocityY = jorge.velocityY + 0.8

  if (cenario.x < 0){
    cenario.x = cenario.width/2;
  }

  jorge.collide(cenarioInvisivel);
  spawnobstacles()
 drawSprites();
 //programe para que se o jorge tocar no grupo de 
 //cactos, o jogo termine
  //programe para a sprite aparecer
 
}

function spawnobstacles() {
if (frameCount % 100 === 0){
  obstacle1 = createSprite(400,265,100,100);
  obstacle1.addImage(cactoImg)
  obstacle1.velocityX=-4
  obstacle1.scale = 0.4;
  //add os cactos no grupo de cactos


}
}
