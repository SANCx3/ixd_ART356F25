let image_filelist = [
  "album/album1.png",
  "album/album2.png",
  "album/album3.png",
  "album/album4.jpg",
  "album/album5.jpg",
  "album/album6.jpg",
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
  nowPlaying = audiolist[current_image];
  slider = createSlider(0, 255);
  slider.position(10, 10);
  slider.size(100);
}

function draw() {
  background(174, 252, 242);
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
