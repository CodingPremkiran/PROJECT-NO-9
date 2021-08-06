var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d550f51d-4ae1-4bdb-b7f6-14e6669e63e6","f94fff85-8e6c-43a5-ad87-757580a0793d"],"propsByKey":{"d550f51d-4ae1-4bdb-b7f6-14e6669e63e6":{"name":"sh","sourceUrl":"assets/v3/animations/t1zUiLIJVEhBEC1JHBllQqmsgaUTxsJ3-a6ZNXxkv8A/d550f51d-4ae1-4bdb-b7f6-14e6669e63e6.png","frameSize":{"x":210,"y":236},"frameCount":1,"looping":true,"frameDelay":4,"version":"usxzcKUToTXLP_fnR8XINhvv2jQOTFsU","loadedFromSource":true,"saved":true,"sourceSize":{"x":210,"y":236},"rootRelativePath":"assets/v3/animations/t1zUiLIJVEhBEC1JHBllQqmsgaUTxsJ3-a6ZNXxkv8A/d550f51d-4ae1-4bdb-b7f6-14e6669e63e6.png"},"f94fff85-8e6c-43a5-ad87-757580a0793d":{"name":"house","sourceUrl":"assets/v3/animations/t1zUiLIJVEhBEC1JHBllQqmsgaUTxsJ3-a6ZNXxkv8A/f94fff85-8e6c-43a5-ad87-757580a0793d.png","frameSize":{"x":236,"y":171},"frameCount":1,"looping":true,"frameDelay":4,"version":"H_HZkx.jgd6r6SkvKDVKUKJLt2_Yq0WB","loadedFromSource":true,"saved":true,"sourceSize":{"x":236,"y":171},"rootRelativePath":"assets/v3/animations/t1zUiLIJVEhBEC1JHBllQqmsgaUTxsJ3-a6ZNXxkv8A/f94fff85-8e6c-43a5-ad87-757580a0793d.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Project no 9 Done by K. Premkiran
var sh = createSprite(20,375);
sh.setAnimation("sh");
sh.scale=0.1;

var house = createSprite(230,200);
house.setAnimation("house");
house.scale=0.3;

var deathCount = 0;

var stone1 = createSprite(125,300,10,10);
stone1.shapeColor=("blue");
var stone2 = createSprite(225,380,10,10);
stone2.shapeColor=("blue");
var stone3 = createSprite(325,25,25,5);
stone3.shapeColor=("red");
var stone4 = createSprite(375,375,25,5);
stone4.shapeColor=("red");
var stone5 = createSprite(250,25,5,50);
stone5.shapeColor=("blue");
var stone6 = createSprite(240,25,5,50);
stone6.shapeColor=("blue");
var stone7 = createSprite(180,75,5,50);
stone7.shapeColor=("blue");
var stone8 = createSprite(170,75,5,50);
stone8.shapeColor=("blue");
var stone9 = createSprite(100,25,5,50);
stone9.shapeColor=("blue");
var stone10 = createSprite(90,25,5,50);
stone10.shapeColor=("blue");
var stone11 = createSprite(100,150,10,10);
stone11.shapeColor=("blue");
var stone12 = createSprite(150,250,10,10);
stone12.shapeColor=("blue");


var wall = createSprite(20,345,55,5);
wall.shapeColor=("yellow");
var wall1 = createSprite(200,397,400,5);
wall1.shapeColor=("yellow");
var wall2 = createSprite(75,345,55,5);
wall2.shapeColor=("yellow");
var wall3 = createSprite(100,317,5,60);
wall3.shapeColor=("yellow");
var wall4 = createSprite(125,290,55,5);
wall4.shapeColor=("yellow");
var wall5 = createSprite(150,317,5,60);
wall5.shapeColor=("yellow");
var wall6 = createSprite(175,345,55,5);
wall6.shapeColor=("yellow");
var wall7 = createSprite(200,317,5,55);
wall7.shapeColor=("yellow");
var wall8 = createSprite(225,290,55,5);
wall8.shapeColor=("yellow");
var wall9 = createSprite(250,317,5,55);
wall9.shapeColor=("yellow");
var wall10 = createSprite(275,345,55,5);
wall10.shapeColor=("yellow");
var wall11 = createSprite(300,222,5,250);
wall11.shapeColor=("yellow");
var wall12 = createSprite(398,200,5,400);
wall12.shapeColor=("yellow");
var wall13 = createSprite(200,3,400,5);
wall13.shapeColor=("yellow");
var wall14 = createSprite(175,100,250,5);
wall14.shapeColor=("yellow");
var wall15 = createSprite(2,150,5,300);
wall15.shapeColor=("yellow");
var wall16 = createSprite(53,125,5,50);
wall16.shapeColor=("yellow");
var wall17 = createSprite(25,300,50,5);
wall17.shapeColor=("yellow");
var wall18 = createSprite(50,277,5,50);
wall18.shapeColor=("yellow");
var wall19 = createSprite(60,150,20,5);
wall19.shapeColor=("yellow");
var wall20 = createSprite( 58,253,20,5);
wall20.shapeColor=("yellow");
var wall21 = createSprite(67,267,5,30);
wall21.shapeColor=("yellow");
var wall22= createSprite(68,137,5,30);
wall22.shapeColor=("yellow");
var wall23 = createSprite(165, 123,200,5);
wall23.shapeColor=("yellow");
var wall24 = createSprite(165,284,200,5);
wall24.shapeColor=("yellow");
var wall25 = createSprite(265, 203,5,165);
wall25.shapeColor=("yellow");

stone1.velocityX=0;
stone1.velocityY=1;
stone2.velocityX=0;
stone2.velocityY=-1;
stone3.velocityX=0;
stone3.velocityY=6;
stone4.velocityX=0;
stone4.velocityY=-6;
stone11.velocityX=0;
stone11.velocityY=3;
stone12.velocityX=0;
stone12.velocityY=-3;


playSound("assets/category_music/island_level_complete_2.mp3", true);


function draw() {
background("pink");
  var edges=  createEdgeSprites();
   
     sh.velocityX= 0;
     sh.velocityY= 0;
   
    sh.bounceOff(wall);
    sh.bounceOff(wall1);
    sh.bounceOff(edges);
     sh.bounceOff(wall2);
     sh.bounceOff(wall3);
     sh.bounceOff(wall4);
     sh.bounceOff(wall5);
     sh.bounceOff(wall6);
     sh.bounceOff(wall7);
     sh.bounceOff(wall8);
     sh.bounceOff(wall9);
     sh.bounceOff(wall10);
     sh.bounceOff(wall11);
     sh.bounceOff(wall12);
     sh.bounceOff(wall13);
     sh.bounceOff(wall14);
     sh.bounceOff(wall15);
     sh.bounceOff(wall16);
     sh.bounceOff(wall17);
     sh.bounceOff(wall18);
     sh.bounceOff(wall19);
     sh.bounceOff(wall20);
     sh.bounceOff(wall21);
     sh.bounceOff(wall22);
     sh.bounceOff(wall23);
     sh.bounceOff(wall24);
     sh.bounceOff(wall25);
     
     stone1.bounceOff(wall1);
     stone1.bounceOff(wall4);
     stone2.bounceOff(wall1);
     stone2.bounceOff(wall8);
     stone3.bounceOff(edges);
     stone3.bounceOff(wall1);
     stone4.bounceOff(wall1);
     stone4.bounceOff(edges);
     stone11.bounceOff(wall23);
     stone11.bounceOff(wall24);
      stone12.bounceOff(wall23);
     stone12.bounceOff(wall24);
     
    fill("yellow");
     text("Deaths: "+deathCount, 160,150);
     
    if (keyDown("up")) {
    sh.velocityX=0;
    sh.velocityY=-5;
    }
    
    if (keyDown("down")) {
  sh.velocityX=0;
  sh.velocityY=5;
    }
    
    if (keyDown("left")) {
    sh.velocityX=-5;
    sh.velocityY=0;
    }
    
    if (keyDown("right")) {
    sh.velocityX=5;
    sh.velocityY=0;
    }
    
    if (sh.isTouching(house)) {
      fill("purple");
      textSize(20);
      text("WINNER",120,200);
     sh.velocityX= 0;
     sh.velocityY= 0;
     stone1.velocityX=0;
stone1.velocityY=0;
stone2.velocityX=0;
stone2.velocityY=0;
stone3.velocityX=0;
stone3.velocityY=0;
stone4.velocityX=0;
stone4.velocityY=0;
stone11.velocityX=0;
stone11.velocityY=0;
stone12.velocityX=0;
stone12.velocityY=0;
    }
    
    
    
  if (sh.isTouching(stone1) || sh.isTouching(stone2) || sh.isTouching(stone3) || sh.isTouching(stone4) || sh.isTouching(stone5) || sh.isTouching(stone6) || sh.isTouching(stone7) || sh.isTouching(stone8) || sh.isTouching(stone9) || sh.isTouching(stone10) || sh.isTouching(stone11) || sh.isTouching(stone12) ) {
     sh.x=20;
     sh.y=375;
     deathCount=deathCount+1;
      
   }
   
drawSprites();
    
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
