let player, groundSensor, ground, platforms, jumpEffect, walkEffect;

function setup() {
  new Canvas(1000, 550);
  	
  world.gravity.y = 11;

  player = new Sprite();
  player.x = 100;
  player.y = 100;
  player.rotationLock = true;
  player.friction = 0


    platform = new Sprite();
  platform.width = 300;
  platform.height = 20;
  platform.x = 150;
  platform.y = 300;
  platform.collider = "static";



}

function update() {
	clear();



  if (kb.pressing("left")) player.vel.x = -5;
  else if (kb.pressing("right")) player.vel.x = 5;
  else player.vel.x = 0;
    
  if (player.vel.y == 0){
  if (kb.presses("up")) player.vel.y = -7 ;
	}

	if (player.y > 800) {
		player.speed = 0;
		player.x = 48;
		player.y = 100; 
	}

}

function draw() {
  background(220);
}
