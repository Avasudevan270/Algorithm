var movingRect,fixedRect

function setup(){
  createCanvas(400,400)

  movingRect = createSprite(100,200,50,80)
  fixedRect = createSprite(200, 200, 80, 50)


  fixedRect.shapeColor= "red"
  movingRect.shapeColor= "red"

}
function draw(){
 background(0)

movingRect.y=mouseY
movingRect.x=mouseX


if(movingRect.x-fixedRect.x <= (movingRect.width+fixedRect.width)/2 &&
fixedRect.x-movingRect.x <= (movingRect.width+fixedRect.width)/2 &&
movingRect.y-fixedRect.y <= (movingRect.height+fixedRect.height)/2 &&
fixedRect.y-movingRect.y <= (movingRect.height+fixedRect.height)/2){
  movingRect.shapeColor="yellow"
}
else{
  movingRect.shapeColor= "red"
}

  drawSprites();
}
