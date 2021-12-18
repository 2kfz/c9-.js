var ball1
var ball2
function setup() {
  createCanvas(900,900);
ball1 = createSprite(200,200,10,10)
ball2 = createSprite(100,300,50,50)


}

function draw() 


{
  
  background(30);
  if (keyDown("W")) {
ball1.y =ball1.y -5


  }
drawSprites();
}




