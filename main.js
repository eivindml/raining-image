var img;
    
function preload(){
  img = loadImage("avatar.jpg");  
}

function setup() {
  createCanvas(600, 950);
  img.loadPixels();

  for (var i = 0; i < img.width; i++) {
    for (var j = 0; j < img.height; j++) {
      //img.set(i, j, get(i, j));
    }
  }

  img.updatePixels();
  image(img, 0, 0);
  noLoop();
}

function draw() {
  background(0);
}
