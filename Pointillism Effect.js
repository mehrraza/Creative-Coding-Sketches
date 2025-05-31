let img;

function preload() {
  img = loadImage('https://images.unsplash.com/photo-1501785888041-af3ef285b470');
}

function setup() {
  createCanvas(img.width, img.height);
  noStroke();
}

function draw() {
  for (let i = 0; i < 5000; i++) {  // draw 500 dots per frame
    let x = floor(random(img.width));
    let y = floor(random(img.height));
    let c = img.get(x, y);
    fill(c);
    ellipse(x, y, random(5, 15), random(5, 15));
  }
}