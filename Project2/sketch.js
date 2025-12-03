let player, groundSensor, ground, platforms, jumpEffect, walkEffect;

let data;
let characters;
let puyopuyoID = 0;

let image_filelist = [
   'puyopuyo/ally.webp'
  ,'puyopuyo/Amitie_Puyo_Puyo_art.webp'
  ,'puyopuyo/Arle_Nadja.webp'
  ,'puyopuyo/draco.webp'
  ,'puyopuyo/Liddelle.webp'
  ,'puyopuyo/Rulue.webp'
  ,'puyopuyo/sig.webp'
  ,'puyopuyo/satan.webp'
]
let imagelist = [];
let current_image = 1; 

let col = 255;
let x, y;


function preload() {
  data = loadJSON("characters.json");

    for (let filename of image_filelist) {
    imagelist.push(loadImage(filename));
  }

  meuseum = loadImage('Illustration40.png')

  floor= loadImage('floor.png')
}

function setup() {
  createCanvas(1000, 500);
    noFill();
  strokeWeight(4);

  	
  world.gravity.y = 11;
  allSprites.pixelPerfect = true;

  player = new Sprite();
  player.x = 100;
  player.y = 100;
  player.rotationLock = true;
  player.friction = 0


    platform = new Sprite();
  platform.width = 1000;
  platform.height = 100;
  platform.image = 'floor.png';
  platform.x = 500;
  platform.y = 450;
  platform.collider = "static";

  groundSensor = new Sprite(100, 100);
	groundSensor.removeColliders();
	groundSensor.visible = false;
	groundSensor.mass = 0.01;
	
	let j = new GlueJoint(player, groundSensor);
	j.visible = false;

    x = 200; 
  y =355;
  // console.log(data.data[0].gender);
  console.log(data.data.length);
}

function draw() {
  background(0);


  let name = data.data[puyopuyoID].name;
  let nameJP = data.data[puyopuyoID].nameJP;
  let unicode = data.data[puyopuyoID].unicode;
  let latin = data.data[puyopuyoID].latin;
  let gender = data.data[puyopuyoID].gender;
  let alias = data.data[puyopuyoID].alias;
  let description = data.data[puyopuyoID].description;
  let firstAppear = data.data[puyopuyoID].firstAppear;
  let lastAppear = data.data[puyopuyoID].lastAppear;

  // for (let i = 0; i < data.data.length; i++) {
  // console.log(description.length);
  // }
  
  image(imagelist[current_image], 200, 20, 232, 472);


  fill(19, 252, 3);
  text(name, 430, 60);
  text(nameJP, 430, 70);
  text(unicode, 430, 80);
  text(latin, 430, 90);
  text(gender, 430, 110);
  text(alias, 430, 130);
  text(description, 430, 140, 280, 100);
  text(firstAppear, 430, 230);
  text(lastAppear, 430, 250);

  
  
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


  image(meuseum,0,0,1000,500);



}

function next() {
  current_image = current_image + 1;

  if (current_image > imagelist.length - 1) {
    current_image = 0;
  }
} 

function keyPressed() {
  if (keyIsDown(32)) {
    puyopuyoID++;
    shufflePuyo();
  }
}

