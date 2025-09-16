let character1;
let character2;
let character3;
let background1;
let background2;
let background3;
let frame1;
let frame2;
let frame3;
let audio1;
let audio2;
let audio3;

let character_id;
let background_id;
let frame_id
let audio_id

function preload() {
  character1 = loadImage("Character1.webp")

  character2 = loadImage("Character2.webp")

  character3 = loadImage("Character3.webp")

  background1 =loadImage("Background1.jpg")

  background2 =loadImage("Background2.webp")

  background3 =loadImage("Background3.jpg")
}

function setup() {
  createCanvas(500, 500);

  frame1=color(186, 186, 184);
  frame2=color(115, 231, 235);
  frame3=color(61, 237, 45);

}

function draw() {
  //background(frame1);


  //frames
  if (frame_id == 1){
    //background(186, 186, 184)
    background(frame1)
  }else  if (frame_id == 2){
    //background(115, 231, 235)
    background(frame2)
  }else  if (frame_id == 3){
    background(frame3)
  }
 
  //backgrounds
  if (background_id == 1){
    image(background1,0,150,500,300)
  }else  if (background_id == 2){
    image(background2,0,100,500,300)
  }else  if (background_id == 3){
    image(background3,0,50,500,300)
  }
    //Characters
  if (character_id == 1){
    image(character1,0,200,200,300)
  }else if (character_id == 2){
    image(character2,200,160,150,200)
  }else if(character_id == 3){
    image(character3,400,300,80,100)
  }
 //controls
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
    shuffleCharacter();
  }
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)){
      shuffleBackground();
     }
  if (keyIsDown(87) || keyIsDown(UP_ARROW)){
      shuffleFrame();
  }
}

function shuffleCharacter(){
  character_id = int(random(1,4));
}

function shuffleBackground(){
  background_id = int(random(1,4));
}
function shuffleFrame(){
 frame_id =int(random(1,4))
}