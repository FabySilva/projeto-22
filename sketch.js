var starImg,bgImg;
var star, starBody;
var imgFada, fada;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    imgFada = loadImage("images/fairyImage1.png","images/fairyImage2.png")
    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(400,500);
    fada.addImage(imgFada);
    fada.scale = 0.2;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
   
}

function draw() {
    background(bgImg);

    if (keyDown("LEFT_ARROW")) {
        fada.x -= 5;
        
       }
      else if(keyDown("RIGHT_ARROW")) {
             fada.x += 5;
    }
      else if(keyDown("DOWN_ARROW")) {
            star.x = starBody.position.x;
             star.y = starBody.position.y;
             Matter.Body.setStatic(starBody,false);

    }

       if(starBody.position.y > 470) {
           Matter.Body.setStatic(starBody,true);
       }
        
    drawSprites();
}

 