let x = -300; 

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220); 


  x += 2;
  if (x > width + 100) {
    x = -300; 
  }

  drawBus(x, 200); 
}

function drawBus(x, y) {
  noStroke();

  fill(255, 215, 0);
  stroke(0);
  strokeWeight(2);
  rect(x, y, 300, 100, 20);

  fill(240);
  rect(x + 40, y + 25, 50, 40, 5);
  rect(x + 150, y + 25, 50, 40, 10);
  
  fill(0);
  ellipse(x + 60, y + 110, 50); 
  ellipse(x + 220, y + 110, 50) 

  fill('lightyellow');
  ellipse(x - 10, y + 50, 20); 
  ellipse(x + 310, y + 50, 20); 
}
