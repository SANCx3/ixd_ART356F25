let data;
let characters;
let puyopuyoID = 0;

let col = 255;
let x, y;


function preload() {
  data = loadJSON("characters.json");

  meuseum = loadImage('Illustration40.png')

  floor= loadImage('floor.png')
}

function setup() {
  createCanvas(1000, 500);
    noFill();
  strokeWeight(4);

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

  fill(255);
  text(name, 450, 60);
  text(nameJP, 450, 70);
  text(unicode, 450, 80);
  text(latin, 450, 90);
  text(gender, 450, 110);
  text(alias, 450, 130);
  text(description, 450, 150);
  text(firstAppear, 450, 200);
  text(lastAppear, 450, 250);
  
  
  image(meuseum,0,0,1000,500);
  image(floor,0, 400, 1000, 100);

  if (keyIsDown(RIGHT_ARROW)) {
    x = x + 2;
    
  } else if (keyIsDown(LEFT_ARROW)){
    x = x - 2;
    
  }
  ellipse(x, y, 70, 100);
}

function keyPressed() {
  if (keyIsDown(32)) {
    puyopuyoID++;
  }
}
