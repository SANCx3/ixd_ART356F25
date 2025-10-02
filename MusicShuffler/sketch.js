let image_filelist = [
  "album/album1.png",
  "album/album2.png",
  "album/album3.png",
  "album/album4.jpg",
  "album/album5.jpg",
  "album/album6.jpg",
  "album/album7.png",
  "album/album8.png",
  "album/album9.png",
  "album/album10.png",
  "album/album11.png",
  "album/album12.png",
  "album/album13.png",
  "album/album14.png",
  "album/album15.png",
  "album/album16.png",
  "album/album17.png",
  "album/album18.png",
  "album/album19.png",
  "album/album20.png",
  "album/album21.png",
  "album/album22.png",
  "album/album23.png",
  "album/albumpac.png",
];
let imagelist = [];
let current_image = 1;
let audio_filelist = [
  "audio/coral.mp3",
  "audio/snow.mp3",
  "audio/date.mp3",
  "audio/Ghosttbusters.mp3",
  "audio/Ghastbasters .mp3",
  "audio/aqua.mp3",
  "audio/PacMansPark.mp3",
  "audio/Biollante.mp3",
  "audio/MENU.mp3",
  "audio/Esperanto.mp3",
  "audio/Sista.mp3",
  "audio/Ghostbusters Afterlife.mp3",
  "audio/Almost Dead.mp3",
  "audio/I Shoulda Known!!.mp3",
  "audio/Bamboo.mp3",
  "audio/ルパン三世80.mp3",
  "audio/Ghostbusterz.mp3",
  "audio/Gostbostr.mp3",
  "audio/Tokyo Speedrun.mp3",
  "audio/Beat Him.mp3",
  "audio/cannonball.mp3",
  "audio/Ska Cha Cha.mp3",
  "audio/Naked Glow.mp3",
  "audio/Eatem UP.mp3",
];
let audiolist = [];
let nowPlaying;
let status = 0;
let slider;

function preload() {
  soundFormats("mp3");

  for (let filename of image_filelist) {
    imagelist.push(loadImage(filename));
  }

  for (let filename of audio_filelist) {
    audiolist.push(loadSound(filename));
  }
}

function setup() {
  createCanvas(500, 500);

  strokeWeight(4);
  nowPlaying = audiolist[current_image];
}

function draw() {
  background(174, 252, 242);
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 10);
    stroke(random(255), random(132), random(245));
    fill(random(255), random(132), random(245));
  }
  image(imagelist[current_image], 80, 20, 350, 350);
  //controls
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
    next();
  }
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
    prev();
  }
  if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
    shuffleAlbum();
  }
  if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
    playAudio();
  }
}
function next() {
  current_image = current_image + 1;

  if (current_image > imagelist.length - 1) {
    current_image = 0;
  }

  nowPlaying.stop();
  nowPlaying = audiolist[current_image];
  nowPlaying.play();
  print("next song is " + current_image);
}
function prev() {
  current_image = current_image - 1;
  if (current_image < 0) {
    current_image = imagelist.length - 1;
  }
  nowPlaying.stop();
  nowPlaying = audiolist[current_image];
  nowPlaying.play();
  print("previous song is " + current_image);
}
function playAudio() {
  if (status == 0) {
    nowPlaying.play();
    status = 1;
  } else {
    status = 0;
    nowPlaying.pause();
  }
}
//code adapted from MP3player by Shaokang/didny
