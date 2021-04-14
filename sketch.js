var H
var M
var S
var G
var B,I

function preload(){
  I= loadImage("logo(2).png")

}

function setup() {
  createCanvas(windowWidth,windowHeight)
  B=createSprite(240,height/2,20,20)
  B.addImage(I)
  B.scale=2
}

function draw() {
  background(0);
  H = hour();
  M = minute();
  S = second();
  if(H==13){
    H=H-12
  }
  if(H==14){
    H=H-12
  }
  if(H==15){
    H=H-12
  }
  if(H==16){
    H=H-12
  }
  if(H==17){
    H=H-12
  }
  if(H==18){
    H=H-12
  }
  if(H==19){
    H=H-12
  }
  if(H==20){
    H=H-12
  }
  if(H==21){
    H=H-12
  }
  if(H==22){
    H=H-12
  }
  if(H==23){
    H=H-12
  }
  if(H==0){
    H=12
  }
  console.log(G);
  textSize(280)
  fill("white")
  textFont("Mercy")
  text(H+"⁢⁢⁢:"+M,width/2-180,height/2+30)
  textSize(120)
  text("Hello Prakrit Maan",width/2-360,height/2+140)
  drawSprites();
}