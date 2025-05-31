let myText = "BATH SPA UNIVERSITY";
let fontSize = 60;

function setup() {
  createCanvas(800, 300);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  fill(34, 139, 87);
  noStroke();
}

function draw() {
  background(150); 

  let x = width / 2;
  let y = height / 2;
  let spacing = 35; 

  for (let i = 0; i < myText.length; i++) {
    let letter = myText[i];
    let offset = sin(frameCount * 0.1 + i * 0.4) * 25;
    let xpos = x - (myText.length / 2 * spacing) + i * spacing;
    let ypos = y + offset;
    
    text(letter, xpos, ypos);
  }
}