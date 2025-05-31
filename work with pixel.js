let img;

function preload() {
  img = loadImage('https://images.unsplash.com/photo-1501785888041-af3ef285b470');
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();
  noLoop();
}

function draw() {
  background(0);
  for (let y = 0; y < img.height; y += 10) {
    for (let x = 0; x < img.width; x += 10) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      fill(r, g, b);
      rect(x, y, 10, 10);
    }
  }
}